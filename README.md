# Portfólio Pessoal

Portfolio moderno construído com **React + Vite + Tailwind CSS**.

## 🚀 Como rodar localmente

```bash
# 1. Instalar dependências
npm install

# 2. Iniciar servidor de desenvolvimento
npm run dev

# 3. Acessar no navegador
# http://localhost:5173
```

## ✏️ Como personalizar

Edite o arquivo `src/data/portfolio.js`:

- **`profile`** — seu nome, bio, links do GitHub/LinkedIn, email
- **`projects`** — seus projetos (título, descrição, links, tecnologias)
- **`skills`** — suas habilidades e nível (`'dia a dia'`, `'confortável'` ou `'estudando'`)
- **`timeline`** — linha do tempo exibida no Dashboard
- **`githubHiddenRepos`** — repositórios que não devem aparecer na atividade recente

Os números e a atividade do Dashboard são calculados automaticamente (a partir dos projetos e da API pública do GitHub).

## 📦 Build para produção

```bash
npm run build
# Arquivos gerados em /dist
```

## ☁️ Deploy na Vercel

### Opção 1 — Interface web (mais fácil)
1. Faça push do projeto para um repositório no GitHub
2. Acesse [vercel.com](https://vercel.com) e clique em **"New Project"**
3. Importe o repositório
4. Clique em **"Deploy"** — a Vercel detecta Vite automaticamente

### Opção 2 — Vercel CLI
```bash
# Instalar CLI
npm i -g vercel

# Deploy
vercel

# Deploy em produção
vercel --prod
```

## 🗂️ Estrutura do projeto

```
portfolio/
├── public/
│   ├── favicon.svg
│   └── og-image.png        ← imagem de preview ao compartilhar o link
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Projects.jsx
│   │   ├── Skills.jsx
│   │   ├── Dashboard.jsx
│   │   ├── Contact.jsx
│   │   ├── Icons.jsx
│   │   └── Footer.jsx
│   ├── data/
│   │   └── portfolio.js   ← EDITE AQUI
│   ├── hooks/
│   │   └── useScrollReveal.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── vite.config.js
├── tailwind.config.js
├── vercel.json
└── package.json
```

## 🎨 Tecnologias

- React 18
- Vite 5
- Tailwind CSS 3
- Lucide React (ícones)
- Syne + DM Sans + JetBrains Mono (Google Fonts)
