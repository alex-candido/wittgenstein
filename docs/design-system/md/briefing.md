### **Project Briefing: presenterai**

**Project Title:**
presenterai (um Micro-SaaS)

**Core Objective:**
Capacitar usuários a criar apresentações completas e visualmente impactantes, no formato Excalidraw, de forma rápida e inteligente. O foco é transformar um simples prompt ou um conteúdo bruto em uma apresentação estruturada e customizável, minimizando o esforço manual.

**Description:**
`presenterai` é uma ferramenta de IA que reinventa o processo de criação de apresentações. Em vez de começar com uma tela em branco, o usuário fornece um tema ou conteúdo inicial. A IA então propõe um **esboço (outline)** completo da apresentação, slide por slide. Este esboço é totalmente editável, permitindo que o usuário refine a narrativa. Para cada slide no esboço, o usuário pode definir parâmetros cruciais como o **tipo de layout visual** (ex: comparação, linha do tempo, processo), a **profundidade do conteúdo** (de conciso a extenso) e palavras-chave para guiar a IA. Após a aprovação do esboço, a IA gera todos os slides no formato Excalidraw, entregando uma apresentação pronta dentro de um ambiente de edição intuitivo.

**Target Audience:**
Profissionais, educadores, estudantes, palestrantes e qualquer pessoa que precise criar apresentações de forma ágil, mas que não queira sacrificar a qualidade visual ou a estrutura da narrativa.
**User Flow:**

1.  **Ponto de Partida (Chat):** O usuário acessa `/app` e se depara com uma interface de chat, pronta para receber um prompt. Este é o ponto de partida para qualquer nova apresentação.
2.  **Geração do Outline:** Ao submeter um prompt, o sistema processa a ideia e redireciona o usuário para `/app/generate/[generateId]`.
3.  **Edição do Outline:** Nesta página, o usuário visualiza o esboço (outline) slide a slide proposto pela IA. Ele pode editar títulos, reordenar slides e ajustar parâmetros como layout e profundidade para cada um.
4.  **Criação da Apresentação:** Com o outline refinado, o usuário clica em "Criar Apresentação". O sistema gera a versão visual e o redireciona para `/app/presentation/[presentationId]`.
5.  **Workspace e Edição Final:** O usuário aterrissa no workspace da apresentação, onde pode fazer ajustes finos diretamente nos slides (formato Excalidraw).
6.  **Galeria de Apresentações:** A qualquer momento, o usuário pode acessar `/app/documents` para ver uma galeria com todas as suas apresentações finalizadas.

**Key Features**

*   **Criação Multi-fonte:** Inicie uma apresentação a partir de um simples prompt de texto ou colando um conteúdo/artigo existente.
*   **Outline Inteligente:** A IA gera um esboço estruturado (títulos e tópicos) de toda a apresentação, servindo como um primeiro rascunho da narrativa.
*   **Esboço 100% Editável:** Total controle para adicionar, remover, reordenar e editar os slides propostos pela IA antes da geração visual.
*   **Customização por Slide:** Capacidade de ajustar cada slide individualmente, definindo:
    *   O **layout visual** (ex: Comparação, Linha do Tempo).
    *   A **profundidade do conteúdo** (ex: Conciso, Detalhado).
    *   **Palavras-chave** para focar o tópico.
*   **Geração para Excalidraw:** Converte o esboço customizado em uma apresentação completa e visualmente rica, renderizada no formato Excalidraw.
*   **Ambiente de Edição Integrado:** Um editor que combina a lista de slides para navegação com um canvas Excalidraw para ajustes finos e edições manuais.

**Conceptual Diagram:**

*   **Entidades:** `User`, `Document`, `Generation`, `Presentation`.
*   **Associações:**
    *   **User <-> Document (1-para-Muitos):** Um usuário pode ter múltiplos documentos (projetos).
    *   **Document <-> Generation (1-para-Muitos):** Um documento pode ter um histórico de múltiplas tentativas de geração (prompts e outlines).
    *   **Generation <-> Presentation (1-para-Muitos):** A partir de um outline, o usuário pode gerar múltiplas versões visuais (apresentações).

**Application Route Structure**

A estrutura de rotas é projetada para ser linear e focada na tarefa.

*   `/app`: **Ponto de Partida (Chat)**. Interface principal para o usuário inserir um prompt e iniciar a criação de uma nova apresentação.

*   `/app/generate/[generateId]`: **Editor de Outline**. Página dedicada a editar e refinar o esboço (outline) de uma apresentação específica, identificada pelo `generateId`.

*   `/app/presentation/[presentationId]`: **Workspace da Apresentação**. Ambiente final de edição e visualização da apresentação, identificada pelo `presentationId`.

*   `/app/documents`: **Galeria de Apresentações**. Exibe uma lista de todas as apresentações finalizadas pelo usuário, servindo como seu portfólio.


**Tech Stack**

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
