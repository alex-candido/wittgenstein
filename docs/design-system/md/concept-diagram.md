# Conceptual Diagram

*   **Entidades:**
    *   `User`: O usuário do sistema.
    *   `Document`: A fonte de conteúdo (prompt, texto) para uma geração.
    *   `Generation`: O resultado de uma geração, contendo o "outline" (esboço) da apresentação.
    *   `Presentation`: A apresentação final com os slides, gerada a partir de um `Generation`.

*   **Associações:**
    *   **User <-> Document (one-to-many):** Um `User` pode criar vários `Document`s.
    *   **Document <-> Generation (one-to-many):** A partir de um `Document`, podem ser feitas várias `Generation`s (tentativas de gerar um outline).
    *   **Generation <-> Presentation (one-to-one):** Uma `Generation` (um outline específico) resulta em uma única `Presentation`.
