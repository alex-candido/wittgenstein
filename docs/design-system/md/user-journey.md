### **User Journey Detalhado: Da Ideia à Apresentação Final (v2)**

Este documento detalha a jornada do usuário no `presenterai`, incorporando as múltiplas camadas de customização disponíveis em cada etapa do fluxo.

**Personas:**
*   **Ana, a Consultora:** Focada em eficiência e customização para clientes.
*   **Carlos, o Estudante:** Focado em estruturação de conteúdo acadêmico.

---

**Fase 1: Descoberta e Configuração Inicial**

1.  **Chegada e Cadastro:** (O usuário encontra o site, explora a landing page e realiza um cadastro simplificado).
2.  **Boas-vindas e Ponto de Partida (`/app`):**
    *   Ao entrar no `/app`, o usuário encontra uma interface de criação central. No primeiro momento, o foco é a **geração a partir de um prompt de texto**.
    *   **Sugestão:** Futuramente, esta tela poderá agregar outras fontes de criação, como "Importar de um artigo (URL)", "Colar conteúdo bruto" ou "Começar com um template de apresentação (ex: Pitch de Vendas, Relatório Semanal)".
    *   **Configuração da Geração:** Antes de enviar o prompt, o usuário tem acesso a um painel de "Configurações Globais" para guiar a IA:
        *   **Tema/Prompt:** Caixa de texto principal para a ideia. Ex: "Plano de marketing para uma startup de café".
        *   **Quantidade de Slides (Aproximada):** Um slider ou campo numérico (ex: 5-15 slides).
        *   **Idioma:** Um dropdown para selecionar o idioma da apresentação (ex: Português, Inglês).
        *   **Palavras-chave Globais:** Tags que devem permear toda a apresentação (ex: "orgânico", "comércio local", "experiência").
        *   **Formato do Slide:** Opções de aspect ratio (ex: 16:9, 4:3).

---

**Fase 2: Refinamento Estrutural (O Editor de Outline)**

1.  **Geração do Outline:** Após submeter o prompt e as configurações, o usuário é levado para o editor de outline (`/app/generate/[generateId]`), onde a IA já propôs uma estrutura inicial.
2.  **A Interface do Editor de Outline:**
    *   **Lista de Slides:** Uma lista vertical e reordenável com os títulos de cada slide sugerido.
    *   **Painel de Customização por Slide:** Ao selecionar um slide na lista, um painel de contexto se abre, oferecendo controle granular sobre aquele slide específico.
3.  **Customização Avançada por Slide:**
    *   **Título do Slide:** Campo de texto para editar o título.
    *   **Tipo de Representação Visual (Layout):** Um dropdown crucial que define a estrutura visual do slide.
        *   **Sugestão de Opções:** `Texto e Tópicos`, `Comparação (Side-by-Side)`, `Linha do Tempo`, `Diagrama de Processo (Linear)`, `Diagrama Hierárquico (Organograma)`, `Persona`, `Citação em Destaque`, `Imagem com Legenda`.
    *   **Profundidade do Conteúdo:** Um seletor para definir o nível de detalhe do texto que a IA irá gerar.
        *   `Conciso`: Apenas os pontos-chave, ideal para slides de apoio visual.
        *   `Detalhado`: Um ou dois parágrafos explicando o tópico.
        *   `Extenso`: Exploração aprofundada, útil para relatórios.
    *   **Palavras-chave do Slide:** Tags específicas para direcionar o conteúdo daquele slide (ex: no slide "Análise de Concorrência", as palavras-chave podem ser "Starbucks", "cafeterias locais").
4.  **Ações no Outline:** O usuário pode adicionar novos slides, duplicar existentes (para manter a mesma configuração) ou removê-los.

---

**Fase 3: Edição Visual (O Workspace da Apresentação)**

1.  **Geração Visual:** Com o outline refinado, o usuário clica em "Criar Apresentação". A IA agora usa as especificações de cada slide para gerar o conteúdo textual e o layout visual correspondente.
2.  **O Workspace de Apresentação (`/app/presentation/[presentationId]`):** A tela é dividida em três áreas principais:
    *   **1. Slide List (Coluna Esquerda):** Uma lista de miniaturas de todos os slides, permitindo navegação rápida e reordenação (arrastar e soltar). O slide ativo é destacado.
    *   **2. Slide Preview / Canvas (Área Central):** O slide selecionado é exibido em um grande canvas de edição. Este canvas possui suas **ferramentas de desenho internas (estilo Excalidraw)** para manipulação direta dos elementos visuais: desenho livre, formas, texto, cores, etc.
    *   **3. Slide Tools (Painel de Ações / Coluna Direita):** Um painel de alto nível, separado das ferramentas de desenho, com ações focadas no slide como um todo.
        *   **Ações de Geração (IA):**
            *   "Gerar novamente o conteúdo" (para pedir à IA uma nova versão do texto/diagrama).
            *   "Alterar o tipo de layout" (para trocar a estrutura, ex: de `Tópicos` para `Linha do Tempo`).
            *   "Ajustar profundidade do conteúdo" (para refinar o nível de detalhe).
        *   **Ações Estruturais:**
            *   "Adicionar novo slide" (abaixo do atual).
            *   "Duplicar slide".
            *   "Excluir slide".
3.  **Ajustes Finos:** O fluxo de trabalho do usuário é duplo:
    *   Ele pode usar o painel **Slide Tools** para fazer grandes alterações estruturais ou de conteúdo com a ajuda da IA.
    *   Ele pode usar as **ferramentas do canvas** para fazer ajustes finos e manuais, como reposicionar um ícone, corrigir um texto ou desenhar uma anotação.

---

**Fase 4: Finalização e Gerenciamento**

1.  **Exportação e Compartilhamento:** (Similar à versão anterior, com opções de exportar em PNG, SVG ou compartilhar um link).
2.  **Galeria de Documentos (`/app/documents`):** (Similar à versão anterior, servindo como portfólio de todas as apresentações criadas).