// ═══════════════════════════════════════════════
// DADOS DO PORTFÓLIO — edite aqui para personalizar
// ═══════════════════════════════════════════════

export const profile = {
  name: 'Gustavo Ferreira Alexandrino',
  shortName: 'Gustavo Ferreira', // usado no destaque do topo (fica melhor no celular)
  role: 'Desenvolvedor Frontend',
  tagline: 'Transformo ideias em interfaces que as pessoas realmente usam.',
  bio: `Sou estudante de Ciência da Computação (concluindo o 4º semestre) e desenvolvedor frontend focado no ecossistema React. Mais do que escrever código, gosto de criar aplicações robustas que entregam uma experiência fluida e resolvem problemas complexos, unindo estética e performance.

Recentemente, arquitetei e desenvolvi de ponta a ponta uma plataforma completa de e-commerce. O projeto engloba desde a jornada do usuário no catálogo e carrinho até um painel administrativo completo para gestão, validando minha capacidade de lidar com arquiteturas reais. Além disso, possuo vivência prática colaborando na estruturação de sistemas SaaS em equipe.

Atualmente, busco uma oportunidade como Desenvolvedor Júnior ou Estagiário, onde eu possa agregar valor imediato em times de produto e continuar minha evolução técnica em direção ao desenvolvimento full stack.`,
  location: 'Brasil',
  availableForWork: true,
  email: 'gualexandrino13@gmail.com',
  github: 'https://github.com/ferreira-guhh',
  linkedin: 'https://www.linkedin.com/in/gustavo-ferreira-alexandrino/',
  whatsapp: '+5517981253926', 
}

export const projects = [
  {
    id: 1,
    title: 'StoreCore - Plataforma E-commerce B2C',
    subtitle: 'Arquitetura Full Stack',
    description:
      'Plataforma completa de e-commerce construída do zero para demonstrar o fluxo integral de um negócio online. O projeto contempla desde a experiência de navegação, busca e carrinho para o usuário final, até a integração fluida com um back-end próprio',
    problem:
      'O desafio principal foi projetar uma arquitetura capaz de gerenciar múltiplos estados complexos (sessão de usuário, persistência de carrinho) e garantir o consumo eficiente de uma API RESTful construída em Node.js com banco de dados PostgreSQL.',
    tags: ['React', 'Vite', 'Tailwind CSS', 'Node.js', 'Express', 'PostgreSQL', 'REST API'],
    featured: true,
    liveUrl: 'https://storecore-ecommerce.vercel.app/',
    repoUrl: 'https://github.com/ferreira-guhh/storecore-ecommerce',
    highlight: 'Sistemas Complexos End-to-End',
    color: 'electric',
    metrics: ['Fluxo completo de Checkout', 'Gerenciamento de estado global', 'Painel administrativo integrado'],
    recruiterTip: 'No rodapé do e-commerce, clique no ícone de cadeado (🔓) e use o login de Recrutador para explorar o Painel Administrativo.',
  },
  {
    id: 9,
    title: 'Financeiro',
    subtitle: 'Gestão financeira pessoal full stack',
    description:
      'Gerenciador financeiro completo: livro-caixa, contas e cartões, parcelamentos, contas fixas, metas, investimentos, relatórios, previsão de caixa, simulador "E se?" e importação de extratos bancários.',
    problem:
      'Modelar regras financeiras reais sem erros de arredondamento: valores em NUMERIC (nunca float), constraints no banco e fatura sempre calculada a partir dos lançamentos.',
    tags: ['React', 'TypeScript', 'Fastify', 'PostgreSQL', 'Drizzle ORM', 'Zod', 'TanStack Query', 'Recharts'],
    featured: false,
    liveUrl: '',
    repoUrl: 'https://github.com/ferreira-guhh/financeiro',
    highlight: 'Full Stack + TypeScript',
    color: 'electric',
    status: 'development',
    metrics: ['82 testes automatizados', 'Importação CSV/OFX/Excel', 'Simulador "E se?"'],
  },
  {
    id: 2,
    title: 'Site Comercial - Agromoreli',
    subtitle: 'Presença digital para agronegócio',
    description:
      'Desenvolvimento do site oficial e catálogo digital para a loja Agromoreli. A aplicação foi estruturada para apresentar os produtos de forma clara, rápida e acessível para o público-alvo, priorizando performance e usabilidade em dispositivos móveis.',
    problem:
      'Demonstra a capacidade de levantar requisitos diretamente com um cliente real, desenhando uma arquitetura front-end que valoriza a marca e facilita a jornada do usuário.',
    tags: ['React', 'Framer Motion', 'Tailwind CSS', 'React Router', 'Vite'],
    featured: false,
    liveUrl: 'https://agromoreli-site.vercel.app/',
    repoUrl: 'https://github.com/ferreira-guhh/agromoreli-site',
    highlight: 'Catálogo + Animações',
    color: 'violet',
    metrics: ['Mobile-first', 'Estado global', 'Animações suaves'],
  },
  {
    id: 3,
    title: 'Vigia de Preço',
    subtitle: 'Dashboard de monitoramento',
    description:
      'Aplicação web em Python que monitora preços de produtos do Mercado Livre via web scraping, cotações de criptomoedas e vagas de tecnologia em tempo real, com alerta quando um preço cai.',
    problem:
      'Evitar a checagem manual diária de preços e lidar com limites de requisição das APIs usando requisições em lote.',
    tags: ['Python', 'Flask', 'BeautifulSoup', 'Requests', 'CoinGecko API', 'Bootstrap'],
    featured: false,
    liveUrl: 'https://www.linkedin.com/posts/gustavo-ferreira-alexandrino_python-flask-automation-activity-7405524969369030656-CN1b?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE20EjgB01fVD0O4Y8GBatPAdDWkNi6FPOE',
    repoUrl: 'https://github.com/ferreira-guhh/vigilante-dashboard',
    highlight: 'Automação + Scraping',
    color: 'teal',
    metrics: ['Alertas de queda de preço', 'Cripto e vagas em tempo real', 'Multi-produto'],
  },
]

// ─── Projetos extras (aparecem ao clicar "Ver mais") ───
export const extraProjects = [
  {
    id: 4,
    title: 'Life-OS',
    subtitle: 'Organização pessoal',
    description:
      'Organização pessoal. Aplicativo para gerenciamento de tarefas, metas e hábitos. Interface intuitiva com visualização de progresso e integração com calendário.',
    problem:
      'Ajudar usuários a manterem o foco e a produtividade, centralizando todas as suas atividades em um único lugar.',
    tags: ['React', 'Redux', 'Tailwind CSS', 'D3.js', 'Supabase'],
    featured: false,
    liveUrl: 'https://life-os-gamma-three.vercel.app/',
    repoUrl: 'https://github.com/ferreira-guhh/life-os',
    highlight: 'Produtividade + Visualização',
    color: 'pink',
    status: 'maintenance',
    metrics: ['Gestão de tarefas', 'Metas e hábitos', 'Visualização de progresso'],
  },
  {
    id: 6,
    title: 'Game-Vault',
    subtitle: 'Catálogo de jogos',
    description:
      'Aplicação que consome a RAWG Games API para exibir um catálogo de jogos. Permite filtrar por gênero, plataforma e popularidade, além de mostrar detalhes de cada jogo.',
    tags: ['React', 'RAWG API', 'Axios', 'Tailwind CSS'],
    liveUrl: 'https://www.linkedin.com/posts/gustavo-ferreira-alexandrino_reactjs-frontend-javascript-ugcPost-7405460161336897538-mLbG?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE20EjgB01fVD0O4Y8GBatPAdDWkNi6FPOE',
    repoUrl: 'https://github.com/ferreira-guhh/game-vault',
    highlight: 'API + Filtragem',
    color: 'violet',
  },
  {
    id: 7,
    title: 'Pyflix',
    subtitle: 'Catálogo de filmes',
    description:
      'Aplicação que consome a API do The Movie Database (TMDb) para exibir um catálogo de filmes. Permite filtrar por gênero, ano e popularidade, além de mostrar detalhes de cada filme.',
    tags: ['Python', 'Flask', 'TMDb API', 'SQLite'],
    liveUrl: 'https://www.linkedin.com/posts/gustavo-ferreira-alexandrino_python-react-fullstack-ugcPost-7405724218136539137-AB_i?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE20EjgB01fVD0O4Y8GBatPAdDWkNi6FPOE',
    repoUrl: 'https://github.com/ferreira-guhh/pyflix',
    highlight: 'API + Filtragem',
    color: 'blue',
  },
  {
    id: 8,
    title: 'Portal de Jogos',
    subtitle: 'Diversão interativa',
    description:
      'Coleção de jogos clássicos desenvolvidos para explorar lógica de programação, algoritmos e animações fluidas no front-end.',
    problem:
      'Explorar lógica de jogo, algoritmos de IA simples e animações interativas com React puro.',
    tags: ['React', 'Framer Motion', 'LocalStorage', 'Tailwind CSS'],
    featured: false,
    liveUrl: '#',
    repoUrl: 'https://github.com/ferreira-guhh/portal-de-jogos',
    highlight: 'IA + Animações',
    color: 'pink',
    status: 'maintenance',
    metrics: ['IA no Jogo da Velha', 'Ranking local', 'Menu unificado'],
  },
]

// Níveis: 'dia a dia' (uso com frequência) · 'confortável' (já usei em projeto) · 'estudando'
export const skillLevels = {
  'dia a dia':   { label: 'uso no dia a dia', dots: 3 },
  'confortável': { label: 'já usei em projetos', dots: 2 },
  'estudando':   { label: 'estudando', dots: 1 },
}

export const skills = {
  frontend: [
    { name: 'React',         level: 'dia a dia' },
    { name: 'Tailwind CSS',  level: 'dia a dia' },
    { name: 'Vite',          level: 'dia a dia' },
    { name: 'Framer Motion', level: 'confortável' },
    { name: 'React Router',  level: 'confortável' },
    { name: 'TypeScript',    level: 'confortável' },
  ],
  backend: [
    { name: 'REST APIs', level: 'dia a dia' },
    { name: 'Node.js',   level: 'confortável' },
    { name: 'Express',   level: 'confortável' },
    { name: 'PostgreSQL', level: 'confortável' },
    { name: 'Python',    level: 'confortável' },
    { name: 'Firebase',  level: 'confortável' },
    { name: 'MongoDB',   level: 'estudando' },
  ],
  tools: [
    { name: 'Git/GitHub', level: 'dia a dia' },
    { name: 'VS Code',    level: 'dia a dia' },
    { name: 'Vercel',     level: 'dia a dia' },
    { name: 'Figma',      level: 'confortável' },
    { name: 'Postman',    level: 'confortável' },
  ],
}

// Linha do tempo (Dashboard) — atualize conforme for evoluindo
export const timeline = [
  { date: '2026 Q1', event: 'Entrega do sistema para o Bazar Ana Paula e avanços práticos no 3º semestre de Ciência da Computação na UNIP.', color: '#00aed4' },
  { date: '2025 Q4', event: 'Desenvolvimento do catálogo do Agromoreli e arquitetura de um e-commerce funcional com carrinho.', color: '#7c5cfc' },
  { date: '2025 Q3', event: 'Construção do Vigia de Preço com scraping automatizado e integrações de API.', color: '#14b8a6' },
  { date: '2025 Q2', event: 'Criação do Portal de Jogos com IA local (Jogo da Velha) para solidificar lógica em JavaScript puro.', color: '#ec4899' },
  { date: '2025 Q1', event: 'Primeiros projetos estruturais com React e Tailwind, unindo estética e responsividade.', color: '#64748b' },
]

// Usuário do GitHub para os dados reais do Dashboard
export const githubUser = 'ferreira-guhh'

// Repositórios que NÃO aparecem na "atividade recente" do Dashboard
// (trabalhos de outras matérias, etc.). Edite à vontade.
export const githubHiddenRepos = [
  'portfolio',
  'homem-sociedade',
  'bioquimica',
  'microbiologia',
  'trabaldo-mat.finaly',
]
