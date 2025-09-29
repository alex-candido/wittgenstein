# Wittgenstein — AI Diagram Generator

## **Descrição**
Wittgenstein é uma aplicação web que transforma descrições textuais em diagramas interativos no Excalidraw. A ferramenta utiliza o **framework Mastra** para organizar agentes AI e o **Gemini** como modelo de inteligência artificial. O sistema garante que cada etapa — classificação, geração e validação — seja modular, consistente e segura, gerando diagramas prontos para renderização no client.

---

## **Objetivo**
Criar uma aplicação capaz de:
- Receber uma descrição textual ou multimodal do usuário
- Processar e interpretar a intenção do input através de agentes AI
- Gerar um diagrama estruturado automaticamente no Excalidraw
- Validar e ajustar o resultado antes de exibição
- Renderizar o diagrama pronto no client para interação e exportação

---

## **Público-Alvo**
- Criadores de conteúdo digital
- Professores e estudantes
- Product Managers e designers que desejam transformar ideias em diagramas rapidamente
- Entusiastas de AI que buscam prototipagem visual rápida

---

## **Features**
- Input flexível: texto e parâmetros de personalização
- Classificação automática do tipo de diagrama via **Mastra + Gemini**
- Geração de diagramas no formato Excalidraw (JSON) com agentes Gemini
- Validação e correção automática da saída via AI
- Pós-processamento e montagem de payload final
- Renderização interativa no client
- Possibilidade de exportar e salvar diagramas

---

## **Stack Tecnológico**
- **Frontend:** Next.js, React, Excalidraw embutido
- **Backend / API:** Node.js, Next.js API Routes
- **AI Agents / Orquestração:** Mastra
- **Modelos AI:** Gemini (Classification, Generation, Validation)
- **Segurança:** Sanitização de input, validação de payload
- **Outros:** TypeScript, JSON Schema para validação estrutural

---

## **Fluxo Simplificado**
```text
Client:
  1. Input-Handler
      - Recebe input + parâmetros
      - Validações básicas

Server:
  2. Pre-Processing / Normalize
      - Limpeza, sanitização, preparação do pacote
  3. Classification-Agent (Mastra + Gemini)
      - Define tipo/estrutura do diagrama
  4. Generator-Agent (Mastra + Gemini)
      - Gera JSON/diagrama
  5. Validator-Agent (Mastra + Gemini)
      - Corrige e valida saída
  6. Post-Processing
      - Ajustes finais, metadados

Client:
  7. Renderer / Formatter
      - Exibe o diagrama pronto no Excalidraw
