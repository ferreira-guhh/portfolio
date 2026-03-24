// ═══════════════════════════════════════════════
// DADOS DO PORTFÓLIO — edite aqui para personalizar
// ═══════════════════════════════════════════════

export const profile = {
  name: 'Gustavo Ferreira Alexandrino',
  role: 'Desenvolvedor Frontend',
  tagline: 'Transformo ideias em interfaces que as pessoas realmente usam.',
  bio: `Sou estudante do 3º semestre de Ciência da Computação e desenvolvedor frontend focado no ecossistema React. Mais do que escrever código, gosto de criar experiências digitais que resolvem problemas reais, unindo estética e performance.

Recentemente, atuei na digitalização completa de um negócio físico com 40 anos de mercado — tirando o projeto do zero até a produção — além de colaborar na arquitetura de sistemas SaaS com outros desenvolvedores.

Atualmente, busco uma oportunidade de estágio onde eu possa agregar valor imediato em times de produto e evoluir tecnicamente em direção ao desenvolvimento full stack.`,
  location: 'Brasil',
  availableForWork: true,
  email: 'gualexandrino13@gmail.com',
  github: 'https://github.com/ferreira-guhh',
  linkedin: 'https://www.linkedin.com/in/gustavo-ferreira-alexandrino/',
}

export const projects = [
  {
    id: 1,
    title: 'Plataforma Digital - Bazar Ana Paula',
    subtitle: 'Em produção desde 2024',
    description:
      'Plataforma web desenvolvida sob medida para o Bazar Ana Paula, um negócio físico com 40 anos de tradição. O foco do projeto foi conduzir a transformação digital da loja, modernizando o acesso aos produtos e otimizando a gestão do catálogo para os clientes locais.',
    problem:
      'A loja operava exclusivamente com processos físicos e manuais há décadas. O sistema digitalizou o catálogo, expandiu a visibilidade da marca e preparou a empresa para atuar no ambiente online, unindo tradição e tecnologia.',
    tags: ['React', 'Vite', 'Tailwind CSS', 'Node.js', 'Express', 'MongoDB', 'Em uso real'],
    featured: true,
    liveUrl: 'https://www.bazaranapaula.com.br/',
    repoUrl: 'https://github.com/ferreira-guhh/bazar-ana-paula',
    highlight: 'Projeto real em produção',
    color: 'electric',
    metrics: ['Em uso real', '~60% mais eficiente', 'Painel admin completo'],
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
    title: 'Clone do Notion',
    subtitle: 'Organização pessoal',
    description:
      'Recriação do Notion com React, permitindo criar páginas, listas de tarefas e notas. Foco em usabilidade e design minimalista.(Teste do site: email: teste@exemplo.com, senha: senha123)',
    tags: ['React', 'supabase', 'OAuth', 'Tailwind CSS'],
    liveUrl: 'https://clone-notion-nine.vercel.app',
    repoUrl: 'https://github.com/ferreira-guhh/clone-notion',
    highlight: 'Funcionalidades completas',
    color: 'teal',
  },  
]

export const dashboardStats = [
  { label: 'Projetos Concluídos', value: 12, suffix: '+',   icon: '⬡', color: 'electric' },
  { label: 'Tecnologias',         value: 15, suffix: '+',   icon: '⬡', color: 'violet'   },
  { label: 'Horas de Estudo',     value: 680, suffix: 'h',  icon: '⬡', color: 'teal'     },
  { label: 'Commits no GitHub',   value: 300, suffix: '+',  icon: '⬡', color: 'pink'     },
]
