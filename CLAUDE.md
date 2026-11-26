# Portfólio do Gustavo — contexto para o Claude

Site: https://portifolio-pessoal-lilac.vercel.app/ (deploy na Vercel a partir da branch `main`).
Stack: React 18 + Vite 5 + Tailwind 3. Todo o conteúdo fica em `src/data/portfolio.js`.
Idioma de trabalho: português. O Gustavo busca vaga de **estágio / dev júnior**.

## Como trabalhamos
- Os projetos são corrigidos um por um, cada um no próprio repositório (`ferreira-guhh/<repo>`),
  muitas vezes em conversas separadas. Quando um projeto fica pronto, o card dele aqui no
  portfólio é atualizado (descrição, tags, liveUrl, status, prints).
- Antes de afirmar algo num card (tecnologia, banco, funcionalidade), confira no repositório do projeto.
- Nada de números inventados no site: o Dashboard usa dados reais (API pública do GitHub) e
  contagens calculadas a partir de `portfolio.js`.

## Status dos projetos (atualize esta tabela ao terminar cada um)
| Projeto | Repo | Situação | Pendências |
|---|---|---|---|
| StoreCore (destaque) | storecore-ecommerce | no ar (demonstração) | Banco é **PostgreSQL**. Nasceu do site real feito para o "Bazar Ana Paula" (loja da mãe do Gustavo); os dados da loja foram trocados por genéricos. **Não** está em uso real pela loja: é demo para recrutadores (tem login de recrutador). |
| Financeiro | financeiro | em desenvolvimento, já utilizável | Sem deploy ainda (`liveUrl` vazio). Tem prints em `docs/screenshots`. |
| Agromoreli | agromoreli-site | no ar (cliente real) | — |
| Vigia de Preço | vigilante-dashboard | só vídeo no LinkedIn | Python/Flask. **Não tem IA.** Plano: publicar online e trocar o `liveUrl`. |
| Life-OS | life-os (há também life-os-lite) | em manutenção | Corrigir e tirar `status: 'maintenance'`. |
| Portal de Jogos | portal-de-jogos (**privado**) / portal-de-jogosv2 (público) | em manutenção | Repo atual é privado → link "código" quebra. Avaliar trocar pelo v2. |
| Game-Vault, Pyflix | game-vault, pyflix | só vídeo no LinkedIn | Talvez publicar online. |
| Clone do Notion | clone-notion | **removido** do portfólio (decisão do Gustavo) | — |
| pix-caixa | pix-caixa | **não entra** no portfólio (sistema de uso interno da loja) | — |

## Pendências gerais
- Currículo: está em `public/curriculo-gustavo-ferreira.pdf` (botões no topo e no contato). Para
  atualizar, substitua o arquivo com o mesmo nome. A versão atual tem pendências: cabeçalho com nome
  sobreposto ao telefone, "3º semestre" desatualizado, link bazaranapaula.com.br fora do ar (404),
  StoreCore descrito como freelance "Atual" (no portfólio é demo) e erros de digitação.
- Foto no "Sobre" — o Gustavo vai enviar.
- O Gustavo estagia na área de informática desde jun/2026 (detalhes virão no documento de contexto).
  Revisar o selo "disponível para estágio" quando esse contexto chegar. **Nunca** publicar dados
  pessoais (CPF, RG, endereço, bolsa) de documentos que ele enviar.
- Sistema de Agendamento (barbearia), repo `Agendamento-online` (privado): está no currículo mas não
  no portfólio — avaliar incluir.
- Bio e linha do tempo (`timeline` em `portfolio.js`): o Gustavo vai mandar um documento com o
  que aconteceu desde 2026 Q2 — atualizar tudo no final. Em jan/2027 começa o 5º semestre de CC (UNIP).
- Atualizar dependências (React 19, Vite, Tailwind 4) — baixa prioridade.

## Convenções
- `status: 'maintenance'` → selo "em atualização" e esconde o link ao vivo.
- `status: 'development'` → selo "em desenvolvimento · já utilizável".
- `liveUrl` do LinkedIn/YouTube vira automaticamente botão de "demonstração em vídeo".
- `githubHiddenRepos` esconde repositórios da "atividade recente" do Dashboard.
- Verificar com `npm run build` e checar no celular (390px) sem rolagem lateral.
