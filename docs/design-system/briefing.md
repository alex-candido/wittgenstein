### **Project Briefing: presenterai**

**1. Project Title:**
presenterai (um Micro-SaaS)

**2. Core Objective:**
Capacitar usuários a criar apresentações completas e visualmente impactantes, no formato Excalidraw, de forma rápida e inteligente. O foco é transformar um simples prompt ou um conteúdo bruto em uma apresentação estruturada e customizável, minimizando o esforço manual.

**3. Description:**
`presenterai` é uma ferramenta de IA que reinventa o processo de criação de apresentações. Em vez de começar com uma tela em branco, o usuário fornece um tema ou conteúdo inicial. A IA então propõe um **esboço (outline)** completo da apresentação, slide por slide. Este esboço é totalmente editável, permitindo que o usuário refine a narrativa. Para cada slide no esboço, o usuário pode definir parâmetros cruciais como o **tipo de layout visual** (ex: comparação, linha do tempo, processo), a **profundidade do conteúdo** (de conciso a extenso) e palavras-chave para guiar a IA. Após a aprovação do esboço, a IA gera todos os slides no formato Excalidraw, entregando uma apresentação pronta dentro de um ambiente de edição intuitivo.

**4. Target Audience:**
Profissionais, educadores, estudantes, palestrantes e qualquer pessoa que precise criar apresentações de forma ágil, mas que não queira sacrificar a qualidade visual ou a estrutura da narrativa.

**5. User Journey:**

1.  **Project Creation:**
    *   O usuário inicia uma nova **Apresentação**.
    *   Fornece a entrada inicial:
        *   **A partir de um Prompt:** (ex: "Uma apresentação sobre a evolução da inteligência artificial").
        *   **A partir de um Conteúdo:** (ex: cola um texto, artigo ou documento).
    *   Define parâmetros globais:
        *   Quantidade de slides desejada.
        *   Estilo geral (ex: profissional, criativo, minimalista).
        *   Idioma da apresentação.

2.  **Outline Generation and Customization:**
    *   Ao clicar em "Gerar", a IA cria e exibe uma lista com os esboços de cada slide (título e tópicos).
    *   O usuário pode **editar, reordenar, adicionar ou remover** slides deste esboço.
    *   Para **cada slide** no esboço, o usuário define:
        *   **Tipo de Layout Visual:** `Comparação`, `Convergência`, `Evolução`, `Estrutura`, `Processo Linear`, `Timeline`, `Citação`, `Imagem e Tópicos`, etc. (Isso instrui a IA sobre *como* organizar visualmente a informação).
        *   **Profundidade do Conteúdo:** `Mínimo`, `Conciso`, `Detalhado`, `Extenso`.
        *   **Palavras-chave:** Termos específicos para garantir que o conteúdo daquele slide seja focado.

3.  **Final Presentation Generation:**
    *   Após customizar o esboço, o usuário clica em "Gerar Apresentação".
    *   A IA processa cada item do esboço e gera os slides correspondentes no formato Excalidraw.
    *   O usuário é redirecionado para a página de edição (`/presentation/[id]`).

4.  **Editing Environment:**
    *   **Esquerda:** Uma lista de miniaturas dos slides (`Slide List`) para navegação.
    *   **Centro:** A área principal (`Slide View`) com o slide selecionado renderizado em um canvas Excalidraw, permitindo edições e ajustes finos.
    *   **Topo:** Uma barra de ferramentas (`Toolbar`) com opções gerais de apresentação (ex: exportar, modo apresentação, configurações).

**6. Key Features**

*   **Criação Multi-fonte:** Inicie uma apresentação a partir de um simples prompt de texto ou colando um conteúdo/artigo existente.
*   **Outline Inteligente:** A IA gera um esboço estruturado (títulos e tópicos) de toda a apresentação, servindo como um primeiro rascunho da narrativa.
*   **Esboço 100% Editável:** Total controle para adicionar, remover, reordenar e editar os slides propostos pela IA antes da geração visual.
*   **Customização por Slide:** Capacidade de ajustar cada slide individualmente, definindo:
    *   O **layout visual** (ex: Comparação, Linha do Tempo).
    *   A **profundidade do conteúdo** (ex: Conciso, Detalhado).
    *   **Palavras-chave** para focar o tópico.
*   **Geração para Excalidraw:** Converte o esboço customizado em uma apresentação completa e visualmente rica, renderizada no formato Excalidraw.
*   **Ambiente de Edição Integrado:** Um editor que combina a lista de slides para navegação com um canvas Excalidraw para ajustes finos e edições manuais.

**7. Tech Stack**

*   **Next.js 15:** Framework React full-stack para construir tanto o frontend (interface do usuário) quanto o backend (API).
*   **Next-Auth:** Solução de autenticação para gerenciar o login de usuários.
*   **Prisma:** ORM (Object-Relational Mapper) para facilitar o acesso e a manipulação do nosso banco de dados.
*   **TypeScript:** Linguagem principal, adicionando tipagem estática para maior robustez e manutenibilidade.
*   **ESLint:** Ferramenta para analisar o código, encontrar e corrigir problemas, garantindo a consistência.
*   **Zod:** Biblioteca para declaração e validação de schemas, garantindo a integridade dos dados que entram na API e saem do banco de dados.
*   **Radix UI / shadcn/ui:** Base da interface, fornecendo componentes acessíveis e reutilizáveis.
*   **Tailwind CSS:** Framework de CSS utility-first para estilização rápida.
*   **Lucide React:** Biblioteca de ícones SVG, leve e customizável, para a iconografia da interface.
*   **React Query (TanStack Query):** Biblioteca para data-fetching, caching e gerenciamento de estado assíncrono.
*   **Axios:** Cliente HTTP para fazer requisições do frontend para a API.
*   **Google Generative AI:** Motor de IA (modelo `gemini-2.5-flash`) para classificação e geração de conteúdo.
*   **Mastra:** Biblioteca interna para orquestração de agentes de IA, gerenciando workflows, ferramentas e prompts.