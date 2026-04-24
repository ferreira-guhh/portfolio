// ═══════════════════════════════════════════════
// DADOS DO PORTFÓLIO — edite aqui para personalizar
// ═══════════════════════════════════════════════

export const profile = {
  name: 'Gustavo Ferreira Alexandrino',
  role: 'Desenvolvedor Frontend',
  tagline: 'Transformo ideias em interfaces que as pessoas realmente usam.',
  bio: `Sou estudante do 3º semestre de Ciência da Computação e desenvolvedor frontend focado no ecossistema React. Mais do que escrever código, gosto de criar aplicações robustas que entregam uma experiência fluida e resolvem problemas complexos, unindo estética e performance.

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
      'O desafio principal foi projetar uma arquitetura capaz de gerenciar múltiplos estados complexos (sessão de usuário, persistência de carrinho) e garantir o consumo eficiente de uma API RESTful construída em Node.js com banco de dados NoSQL.',
    tags: ['React', 'Vite', 'Tailwind CSS', 'Node.js', 'Express', 'PostgreSQL', 'REST API'],
    featured: true,
    liveUrl: 'https://storecore-ecommerce.vercel.app/',
    repoUrl: 'https://github.com/ferreira-guhh/storecore-ecommerce',
    highlight: 'Sistemas Complexos End-to-End',
    color: 'electric',
    metrics: ['Fluxo completo de Checkout', 'Gerenciamento de estado global', 'Painel administrativo integrado', '💡 Dica para Avaliadores: Acesse a visão de gestão! No rodapé do e-commerce, clique no ícone de cadeado (🔓) e use o login de Recrutador para explorar o Painel Administrativo.'],
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
    subtitle: 'Automação inteligente',
    description:
      'Automação inteligente. Ferramenta que monitora preços de produtos online e notifica o usuário sobre quedas de valor. Scraping automatizado com histórico visual de preços.',
    problem:
      'Economizar tempo e dinheiro eliminando a necessidade de verificar preços manualmente todos os dias.',
    tags: ['React', 'Node.js', 'Cheerio', 'Chart.js', 'Cron Jobs'],
    featured: false,
    liveUrl: 'https://www.linkedin.com/posts/gustavo-ferreira-alexandrino_python-flask-automation-activity-7405524969369030656-CN1b?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE20EjgB01fVD0O4Y8GBatPAdDWkNi6FPOE',
    repoUrl: 'https://github.com/seuusuario/vigia-preco',
    highlight: 'Automação + IA',
    color: 'teal',
    metrics: ['Alertas em tempo real', 'Histórico de preços', 'Multi-produto'],
  },
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
    metrics: ['Gestão de tarefas', 'Metas e hábitos', 'Visualização de progresso'],
  },
]

export const skills = {
  frontend: [
    { name: 'React',        level: 80 },
    { name: 'TypeScript',   level: 65 },
    { name: 'Tailwind CSS', level: 80 },
    { name: 'Vite',         level: 75 },
    { name: 'Framer Motion',level: 75 },
    { name: 'React Router', level: 65 },
  ],
  backend: [
    { name: 'Node.js',   level: 75 },
    { name: 'Express',   level: 60 },
    { name: 'MongoDB',   level: 50 },
    { name: 'REST APIs', level: 80 },
    { name: 'Firebase', level: 75 }
  ],
  tools: [
    { name: 'Git/GitHub',  level: 80 },
    { name: 'Figma',       level: 80 },
    { name: 'VS Code',     level: 80 },
    { name: 'Vercel',      level: 80 },
    { name: 'Postman',     level: 60 },
  ],
}

// ─── Projetos extras (aparecem ao clicar "Ver mais") ───
export const extraProjects = [
  {
    id: 5,
    title: 'Clone do notion',
    subtitle: 'UI + integração de API',
    description:
      'Recriação do aplicativo notion, focando na interface e integração com a API oficial. Permite criar, editar e organizar notas em um layout flexível.',
    tags: ['React', 'Notion API', 'OAuth', 'Tailwind CSS'],
    liveUrl: 'https://clone-notion-nine.vercel.app',
    repoUrl: 'https://github.com/ferreira-guhh/clone-notion',
    highlight: 'API + OAuth',
    color: 'teal',
  },
  {
  id: 6,
    title: 'game-vault',
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
    subtitle: 'Catalogo de filmes',
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
      'Diversão interativa. Coleção de jogos clássicos (como Jogo da Velha com IA simples) focados em interatividade. Ranking local entre jogadores.',
    problem:
      'Explorar lógica de jogo, algoritmos de IA simples e animações interativas com React puro.',
    tags: ['React', 'Framer Motion', 'LocalStorage', 'Tailwind CSS'],
    featured: false,
    liveUrl: 'https://games.seusite.com',
    repoUrl: 'https://github.com/ferreira-guhh/portal-de-jogos',
    highlight: 'IA + Animações',
    color: 'pink',
    metrics: ['IA no Jogo da Velha', 'Ranking local', '4 jogos'],
  },

]

export const dashboardStats = [
  { label: 'Projetos Concluídos', value: 12, suffix: '+',   icon: '⬡', color: 'electric' },
  { label: 'Tecnologias',         value: 15, suffix: '+',   icon: '⬡', color: 'violet'   },
  { label: 'Horas de Estudo',     value: 680, suffix: 'h',  icon: '⬡', color: 'teal'     },
  { label: 'Commits no GitHub',   value: 300, suffix: '+',  icon: '⬡', color: 'pink'     },
]
