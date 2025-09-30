### **Diagrama Conceitual: presenterai**

Este documento descreve as principais entidades do sistema e o fluxo de usuário de alto nível para a criação de uma apresentação.

---

### **1. Entidades Principais**

*   **`User`**
    *   Representa o usuário autenticado no sistema.
    *   Gerenciado pelo `Next-Auth`.
    *   Um `User` pode ter várias `Presentations`.

*   **`Presentation`**
    *   A entidade central do projeto, representa uma apresentação criada pelo usuário.
    *   Contém atributos como `title`, `userId`, e o `outline` (esboço) gerado.
    *   Relaciona-se com múltiplos `Slides`.

*   **`Slide`**
    *   Representa um slide individual dentro de uma `Presentation`.
    *   Contém o conteúdo final gerado em formato JSON (Excalidraw), a ordem (`order`) dentro da apresentação e, possivelmente, os parâmetros que o geraram (layout, profundidade, etc.).

*   **`Input` (Entidade Lógica, não-modelada)**
    *   Representa os dados iniciais fornecidos pelo usuário para iniciar a criação: o `prompt` ou `content`, a quantidade de slides, o idioma, etc.

*   **`Outline` (Entidade Lógica, não-modelada)**
    *   Representa o esboço da apresentação. Será provavelmente um campo `JSON` dentro da entidade `Presentation`, contendo a lista de slides a serem gerados, com seus respectivos títulos, tópicos e customizações.

---

### **2. Fluxo do Usuário (Alto Nível)**

O diagrama abaixo ilustra a jornada do usuário desde a criação até a edição da apresentação.

```mermaid
graph TD
    subgraph "Autenticação"
        A[Usuário acessa a plataforma] --> B{Login via Next-Auth};
    end

    subgraph "Criação e Esboço"
        B --> C[Clica em "Nova Apresentação"];
        C --> D[Fornece Input Inicial<br>(Prompt, # de slides, etc)];
        D -- 1. Gerar Esboço --> E[Sistema gera o Outline (lista de slides)];
    end

    subgraph "Customização do Esboço"
        E --> F[Usuário visualiza a lista de slides];
        F --> G{Modifica o esboço?};
        G -- Sim --> H[Edita títulos, reordena, ajusta parâmetros por slide];
        H --> F;
        G -- Não --> I[Clica em "Gerar Apresentação"];
    end

    subgraph "Edição e Finalização"
        I -- 2. Gera Slides Finais --> J[Sistema gera o JSON Excalidraw para cada slide];
        J --> K[Redireciona para o Ambiente de Edição];
        K --> L[Usuário vê o slide no canvas Excalidraw];
        L --> M{Ajustes finos?};
        M -- Sim --> N[Edita diretamente no canvas];
        N --> O[Salva alterações no slide];
        O --> L;
        M -- Não --> P[Exporta/Apresenta];
    end
```


http://presenterai.com.br/

http://presenterai.com.br/docs

http://presenterai.com.br/terms

http://presenterai.com.br/auth/sign-in
http://presenterai.com.br/auth/sign-up
http://presenterai.com.br/auth/reset-password
http://presenterai.com.br/auth/forgot-password

http://presenterai.com.br/app/
http://presenterai.com.br/app/presentation/create
http://presenterai.com.br/app/presentation/generate/[id]
http://presenterai.com.br/app/presentation/[id]
http://presenterai.com.br/app/account