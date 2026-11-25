---
name: atualizar-card
description: Atualiza o card de um projeto no portfólio do Gustavo depois que o projeto foi corrigido ou publicado. Use quando ele disser algo como "o <projeto> ficou pronto", "atualiza o card do <projeto>" ou "coloca o <projeto> no portfólio".
---

# Atualizar card de projeto no portfólio

1. **Identifique o projeto e o repositório** na tabela de status do `CLAUDE.md`
   (ex.: Life-OS → `ferreira-guhh/life-os`). Se não estiver lá, pergunte o nome do repo.
2. **Confira a verdade no repositório** antes de escrever qualquer coisa:
   - clone o repo (leitura) e leia README, `package.json` / `requirements.txt` e a estrutura;
   - tecnologias reais → `tags`; funcionalidades reais → `description` e `metrics`;
   - nunca afirme IA, banco, testes ou números que não existam no código.
3. **Teste o link ao vivo** (`liveUrl`) se houver. Se responder, remova `status: 'maintenance'`.
   Link do LinkedIn/YouTube vira "demonstração em vídeo" automaticamente.
4. **Edite `src/data/portfolio.js`**: mantenha o tom dos outros cards (português, frases curtas,
   foco no problema resolvido). Projetos fortes ficam em `projects`; os demais em `extraProjects`.
5. **Atualize a tabela de status do `CLAUDE.md`** com a nova situação e pendências.
6. **Verifique**: `npm run build` sem erros e a página sem rolagem lateral em 390px.
7. **Mostre ao Gustavo** o antes/depois do card e só então faça commit e push.
