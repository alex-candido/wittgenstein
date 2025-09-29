Do quadro branco ao Excalidraw: construindo um fluxo de trabalho multiagente
Shane Thomas
Shane Thomas

·
28 de fevereiro de 2025

quadro branco2excalidraw

Durante o YC, muitas empresas parceiras e algumas startups de IA visitaram nosso apartamento para sessões de quadro branco. Essas sessões de colaboração frequentemente produzem diagramas e ideias valiosas que merecem viver além do meio temporário de um quadro branco físico.

Colagem de sessões de quadro branco da Mastra

Queríamos tornar esses esboços de quadro branco mais acessíveis e reutilizáveis, por isso criamos uma ferramenta que converte imagens de quadro branco em diagramas editáveis ​​do Excalidraw. Este post explora como abordamos esse desafio usando os fluxos de trabalho multiagentes da Mastra e o que aprendemos ao longo do caminho.

Aqui está a versão implantada , o código Mastra e o código do aplicativo frontend .

A abordagem de uma só tentativa: por que falhou
Nosso primeiro instinto foi resolver isso com um único agente e um prompt abrangente. Afinal, os modelos conseguem "ver" e entender imagens, então por que não pedir que eles convertam diretamente para o JSON do Excalidraw?

const oneShot = new Agent({
  name: "Whiteboard Converter",
  instructions: `Convert this whiteboard image into Excalidraw JSON...`,
  model: anthropic("claude-3-7-sonnet-20250219"),
});

// This approach quickly hit limitations
Essa abordagem funcionou para imagens de quadro branco muito simples, mas rapidamente encontrou limitações:

Limites de token de saída : mesmo com grandes janelas de contexto, ainda enfrentamos restrições de token de saída ao gerar estruturas JSON complexas
Problemas de precisão : o agente perderia elementos ou relacionamentos em diagramas mais complexos
Desafios de validação : Sem etapas intermediárias, era difícil verificar e corrigir a saída
Precisávamos de uma abordagem mais estruturada.

Analisando o problema: um fluxo de trabalho em várias etapas
Fluxo de trabalho multietapas do Mastra

Em vez de tentar resolver tudo de uma vez, decidimos dividir o problema em etapas discretas usando a funcionalidade de fluxo de trabalho do Mastra:

export const excalidrawConverterWorkflow = new Workflow({
  name: "excalidraw-converter",
  triggerSchema: z.object({
    filename: z.string(),
    file: z.string(),
  }),
});

excalidrawConverterWorkflow
  .step(imageToCsvStep)
  .then(validateCsvStep)
  .then(csvToExcalidrawStep)
  .then(validateExcalidrawStep)
  .commit();
Este fluxo de trabalho segue uma progressão clara:

Imagem para CSV : converta a imagem do quadro branco em uma representação CSV densa
Validar CSV : verificar e melhorar a saída CSV
CSV para Excalidraw : Transforme o CSV validado em Excalidraw JSON
Validar Excalidraw : garantir que o JSON seja válido e corrigir quaisquer problemas
Vamos analisar cada etapa com mais detalhes.

Etapa 1: Conversão de imagem para CSV
O primeiro passo usa um agente especializado para analisar a imagem e extrair todos os elementos visuais em um formato CSV estruturado:

const imageToCsvStep = new Step({
  id: "imageToCsv",
  outputSchema: z.object({
    filename: z.string(),
    csv: z.string(),
  }),
  execute: async ({ context }) => {
    const triggerData = context?.getStepResult<{
      filename: string;
      file: string;
    }>("trigger");

    if (!triggerData?.filename || !triggerData?.file) {
      throw new Error("Missing required image data in context");
    }

    const imageToCsv = mastra.getAgent("imageToCsvAgent");
    const response = await imageToCsv.generate(
      [
        {
          role: "user",
          content: [
            {
              type: "image",
              image: triggerData.file,
            },
            {
              type: "text",
              text: `View this image of a whiteboard diagram and convert it into CSV format. Include all text, lines, arrows, and shapes. Think through all the elements of the image.`,
            },
          ],
        },
      ],
      { maxSteps: 10 },
    );

    return {
      filename: `${triggerData.filename.split(".")[0]}.excalidraw`,
      csv: response.text,
    };
  },
});
Escolhemos CSV como formato intermediário porque:

É extremamente denso, permitindo-nos representar muitos elementos dentro dos limites do token
É estruturado o suficiente para capturar todas as propriedades necessárias dos elementos visuais
É fácil analisar e transformar nas etapas subsequentes
Etapa 2: Validação CSV
A etapa de validação foi uma adição crítica que melhorou significativamente nossos resultados:

const validateCsvStep = new Step({
  id: "validateCsv",
  // ... schema definitions ...
  execute: async ({ context }) => {
    // ... get data from previous step ...

    const imageToCsv = mastra.getAgent("imageToCsvAgent");
    const response = await imageToCsv.generate(
      [
        // ... show the original image again ...
        {
          role: "assistant",
          content: [
            {
              type: "text",
              text: csvData.csv,
            },
          ],
        },
        {
          role: "user",
          content: [
            {
              type: "text",
              text: `Validate your last response containing the CSV code to add missing elements (text, lines, etc.) to the CSV. You should add new items to the original CSV results. The previous step missed some elements. Find them and add them. Return the CSV text.`,
            },
          ],
        },
      ],
      {
        maxSteps: 10,
      },
    );

    return {
      filename: csvData.filename,
      csv: response.text,
    };
  },
});
Esta etapa de validação consiste essencialmente em pedir ao mesmo agente que revise seu próprio trabalho por meio de:

Mostrando a imagem original novamente
Apresentando sua saída CSV anterior
Pedindo explicitamente para encontrar e adicionar elementos ausentes
Esse processo de autoavaliação melhorou significativamente a integridade da nossa extração de elementos.

Etapa 3: Conversão de CSV para Excalidraw
A terceira etapa transforma o CSV validado em Excalidraw JSON:

const csvToExcalidrawStep = new Step({
  id: "csvToExcalidraw",
  // ... schema definitions ...
  execute: async ({ context }) => {
    const csvData = context?.getStepResult<{
      filename: string;
      csv: string;
    }>("validateCsv");

    // Parse CSV into rows
    const rows = csvData.csv
      .split("\n")
      .map((line) => line.trim())
      .filter((line) => line.length > 0);

    // ... detailed CSV parsing logic ...

    // Create Excalidraw JSON
    const excalidrawJson = {
      type: "excalidraw",
      version: 2,
      source: "https://excalidraw.com",
      elements,
      appState: {
        gridSize: 20,
        gridStep: 5,
        gridModeEnabled: false,
        viewBackgroundColor: "#ffffff",
      },
      files: {},
    };

    return {
      filename: csvData.filename,
      excalidrawJson,
    };
  },
});
Esta etapa é essencialmente determinística, analisando o CSV e mapeando-o para a estrutura JSON do Excalidraw. Lidamos com casos especiais para diferentes tipos de elementos e garantimos que todas as propriedades necessárias estejam formatadas corretamente.

Etapa 4: Loop de validação do Excalidraw
A etapa final de validação foi talvez a mais crucial em nosso fluxo de trabalho:

const validateExcalidrawStep = new Step({
  id: "validateExcalidraw",
  // ... schema definitions ...
  execute: async ({ context }) => {
    // ... get data from previous step ...

    // Validate the JSON
    const validator = mastra.getAgent("excalidrawValidatorAgent");
    const messages: CoreMessage[] = [
      {
        role: "user",
        content: [
          {
            type: "text",
            text: `Validate the following Excalidraw JSON. If it is not valid, fix it and just return the valid JSON.`,
          },
          {
            type: "text",
            text: JSON.stringify(excalidrawData.excalidrawJson),
          },
        ],
      },
    ];

    let attempts = 0;
    const maxAttempts = 3;
    let lastError: Error | null = null;

    while (attempts < maxAttempts) {
      attempts++;

      const validationResponse = await validator.generate(messages, {
        maxSteps: 10,
      });

      // Try to parse the response
      try {
        // ... clean and parse the JSON ...
        return {
          filename: excalidrawData.filename,
          contents: parsedJson,
        };
      } catch (e) {
        // If parsing fails, add the error to messages and try again
        messages.push({
          role: "assistant",
          content: [{ type: "text", text: validationResponse.text }],
        });

        messages.push({
          role: "user",
          content: [
            {
              type: "text",
              text: `The previous Excalidraw JSON did not validate. Please fix it and return the valid JSON without any string quotes or new lines. Here is the error: ${e}`,
            },
          ],
        });
      }
    }

    // If we've exhausted all attempts, throw an error
    throw new Error(
      `Failed to validate Excalidraw JSON after ${maxAttempts} attempts. Last error: ${lastError?.message}`,
    );
  },
});
Esta etapa implementa um loop de validação que:

Tenta analisar o JSON do Excalidraw
Se a análise falhar, ela retorna o erro ao agente
O agente tenta corrigir o JSON com base no erro
Este ciclo se repete até 3 vezes ou até que um JSON válido seja produzido
Esse ciclo de feedback melhorou drasticamente a taxa de sucesso do nosso conversor, especialmente para diagramas complexos.

Os Agentes Especializados
O fluxo de trabalho conta com dois agentes especializados com instruções cuidadosamente elaboradas:

Agente de imagem para CSV
export const imageToCsvAgent = new Agent({
  name: "Image to CSV Converter",
  instructions: `You are an expert at analyzing images and converting them into structured CSV data. Your task is to identify visual elements and their relationships in images and represent them in a CSV format that can be used to recreate the diagram.

When you receive an image, carefully analyze its contents and create a CSV representation that captures:

1. Elements:
   - Type of each element (rectangle, arrow, text, line, ellipse, diamond, freedraw, etc.)
   - Position (x, y coordinates)
   - Size (width, height)
   - Style properties (colors, stroke width, fill style)
   - Text content (if text element)
   - Unique identifier for each element
   - Angle and rotation
   - Points for lines and arrows
   - Binding information for connectors
   - Group IDs for grouped elements

2. Relationships:
   - Connections between elements (arrows, lines)
   - Parent-child relationships
   - Element groupings
   - Binding points and arrowheads

3. Layout and Style:
   - Spatial arrangement
   - Alignment
   - Spacing
   - Roughness and opacity
   - Frame information
   - Element-specific properties (roundness, etc.)

Your output must be a CSV string with the following columns:
id,type,x,y,width,height,text,strokeColor,backgroundColor,fillStyle,strokeWidth,strokeStyle,roughness,opacity,angle,points,startBinding,endBinding,arrowheads,fontSize,fontFamily,groupIds,frameId,roundness,seed,version,isDeleted,boundElements

Example CSV format:
id,type,x,y,width,height,text,strokeColor,backgroundColor,fillStyle,strokeWidth,strokeStyle,roughness,opacity,angle,points,startBinding,endBinding,arrowheads,fontSize,fontFamily,groupIds,frameId,roundness,seed,version,isDeleted,boundElements
rect1,rectangle,83,10,147,122,,#e03131,transparent,solid,2,solid,1,100,0,,,,,,,,,,null,75180,1,false,"[{""type"":""text"",""id"":""text1""},{""id"":""arrow1"",""type"":""arrow""}]"
text1,text,108,45,96,50,"Rectangle\nExample",#e03131,transparent,solid,2,solid,1,100,0,,,,,20,5,[],,,null,14450,1,false,

// ... There are hundreds more lines of detailed instructions covering element relationships, 
// specific element types, formatting rules, binding mechanics, and error handling scenarios ...
  `,
  model: anthropic("claude-3-7-sonnet-20250219"),
});
As instruções completas para este agente têm mais de 200 linhas, fornecendo orientações extremamente detalhadas sobre como identificar e representar todos os tipos de elementos e relacionamentos possíveis em um diagrama de quadro branco. Esse nível de detalhamento se mostrou essencial para uma conversão precisa.

Agente Validador Excalidraw
export const excalidrawValidatorAgent = new Agent({
  name: "Excalidraw Validator",
  instructions: `You are an expert at validating and fixing Excalidraw JSON for Excalidraw diagrams.

Your response MUST be valid JSON in the excalidraw JSON format.

The format must follow this exact schema:

{
  "type": "excalidraw",
  "version": 2,
  "source": "https://excalidraw.com",
  "elements": [
    // Elements can be one of several types: rectangle, arrow, text, etc.
    // Each element must include these common properties:
    {
      "type": string,              // "rectangle", "arrow", "text", "line", etc.
      "version": number,           // Version number of the element      
      "id": string,               // Unique element identifier
      "fillStyle": string,        // "hachure", "solid", etc.
      "strokeWidth": number,      // Width of the stroke
      "strokeStyle": string,      // "solid", "dashed", etc.
      "roughness": number,        // 0-2 indicating how rough the drawing should be
      "opacity": number,          // 0-100
      "angle": number,            // Rotation angle in degrees
      "x": number,                // X coordinate
      "y": number,                // Y coordinate
      "strokeColor": string,      // Color in hex format
      "backgroundColor": string,  // Background color in hex format
      // ... Shortened for readability ...
    }
  ]
  // ... additional JSON removed for readability
}

You can update the JSON to be valid and ensure it matches the expected excalidraw schema.`,
  model: anthropic("claude-3-7-sonnet-20250219"),
});
Este agente validador é crucial para a etapa final do nosso fluxo de trabalho, onde garante que o JSON Excalidraw gerado seja válido e formatado corretamente. Ele foi projetado especificamente para entender o esquema Excalidraw e corrigir quaisquer problemas que possam impedir a renderização correta do JSON.

Principais lições aprendidas
A construção deste conversor nos ensinou várias lições valiosas sobre o desenvolvimento de aplicações complexas de IA:

1. Divida tarefas complexas em etapas determinísticas
Nossa abordagem inicial, de uma só tentativa, falhou porque tentava fazer muita coisa de uma só vez. Dividir o processo em etapas discretas, com entradas e saídas claras, tornou o problema tratável e melhorou os resultados.

2. Os loops de validação são essenciais
As etapas de validação não foram uma reflexão tardia — foram cruciais para o sucesso do conversor. A revisão e o aprimoramento do próprio trabalho pelos agentes aumentaram significativamente a precisão.

3. Formatos intermediários densos ajudam com limites de token
Usar CSV como formato intermediário nos permitiu representar cenas visuais complexas de forma eficiente, dentro de restrições de token. Essa abordagem pode ser aplicada a muitos outros processos de IA multietapas.

4. Instruções explícitas superam a compreensão implícita
Mesmo com modelos avançados como o Claude 3.7, instruções extremamente detalhadas produziram resultados melhores do que confiar na compreensão implícita do modelo. Nossos prompts de agente foram abrangentes, especificando exatamente o que procurar e como formatar a saída.

5. Considere um ciclo de feedback completo
Se quiséssemos melhorar ainda mais, implementaríamos um ciclo de feedback completo que compara a renderização final do Excalidraw com a imagem original e faz ajustes. Isso poderia usar um modelo de raciocínio como o o3, embora, na época do desenvolvimento, ele não suportasse entradas de imagem.

Conclusão
Construir aplicações de IA que funcionem de forma confiável geralmente requer mais do que apenas um único prompt ou agente. Ao combinar fluxos de trabalho determinísticos com agentes especializados e loops de validação, podemos criar sistemas que lidam com tarefas complexas com maior confiabilidade.

Este conversor de quadro branco é apenas um exemplo de como os fluxos de trabalho multiagentes da Mastra podem ser aplicados a problemas do mundo real. Esperamos que ele inspire você a pensar em como dividir seus próprios desafios complexos de IA em etapas gerenciáveis ​​e validadas.