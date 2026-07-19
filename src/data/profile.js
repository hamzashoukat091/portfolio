export const profile = {
  name: 'Hamza Shoukat',
  role: 'Senior AI Python Developer',
  tagline: 'Turning Vision into Virtual Reality',
  location: 'Lahore, Pakistan',
  company: 'Daria Technologies',
  email: 'hamzashoukat091@gmail.com',
  phone: '+92-341-5535091',
  resumeUrl: '/Hamza-Shoukat-Resume.pdf',
  bio: `Senior AI Python Developer with 4+ years specializing in intelligent automation, SaaS platforms and enterprise AI solutions. I've architected systems serving 10K+ users, cut operational costs by 40%, and I live at the intersection of agentic systems and LLM integration.`,
  roles: [
    'Agentic AI Systems',
    'RAG & LLM Integration',
    'SaaS Architecture',
    'Intelligent Automation',
  ],
  socials: {
    github: 'https://github.com/hamzashoukat091',
    linkedin: 'https://www.linkedin.com/in/hamzashoukat091',
    medium: 'https://medium.com/@hamzashoukat091',
    stackoverflow: 'https://stackoverflow.com/users/hamza-shoukat',
    instagram: 'https://www.instagram.com/hamzashoukat_',
  },
}

export const stats = [
  { label: 'Years of AI Engineering', value: 4, suffix: '+' },
  { label: 'Users Served in Production', value: 10, suffix: 'K+' },
  { label: 'Operational Cost Reduction', value: 40, suffix: '%' },
  { label: 'Projects Shipped', value: 15, suffix: '+' },
]

export const skillGroups = [
  {
    id: 'ai',
    label: 'AI & Agents',
    blurb: 'Autonomous agents that plan, call tools and get real work done.',
    skills: [
      { name: 'Agentic Systems (Claude / GPT)', level: 95 },
      { name: 'LLM Tool Use & Orchestration', level: 92 },
      { name: 'Prompt Engineering', level: 94 },
      { name: 'Workflow Automation', level: 90 },
    ],
  },
  {
    id: 'rag',
    label: 'RAG & LLM',
    blurb: 'Retrieval pipelines that make models answer with your data.',
    skills: [
      { name: 'RAG Pipelines', level: 93 },
      { name: 'Pinecone / Vector DBs', level: 91 },
      { name: 'Embeddings & Semantic Search', level: 90 },
      { name: 'LangChain', level: 88 },
    ],
  },
  {
    id: 'backend',
    label: 'SaaS & Backend',
    blurb: 'Multi-tenant platforms engineered for scale and uptime.',
    skills: [
      { name: 'Python / FastAPI', level: 96 },
      { name: 'PostgreSQL', level: 90 },
      { name: 'Multi-tenant Architecture', level: 89 },
      { name: 'REST API Design', level: 93 },
    ],
  },
  {
    id: 'automation',
    label: 'Scraping & Automation',
    blurb: 'Data extraction at scale — resilient, fast, undetectable-ly polite.',
    skills: [
      { name: 'Selenium', level: 94 },
      { name: 'Scrapy', level: 91 },
      { name: 'Data Pipelines', level: 90 },
      { name: 'API Integration', level: 92 },
    ],
  },
]

export const techMarquee = [
  'Python', 'FastAPI', 'Claude', 'GPT', 'LangChain', 'Pinecone', 'PostgreSQL',
  'React', 'Next.js', 'TypeScript', 'Node.js', 'MongoDB', 'Selenium', 'Scrapy',
  'Docker', 'Linux', 'Git', 'AWS', 'Django', 'Express',
]

export const projects = [
  {
    name: 'PerfectCSR.ai',
    category: 'AI SaaS',
    description:
      'Enterprise AI customer-service platform. The AI handles ~70% of support tickets automatically — response times dropped from hours to seconds.',
    stack: ['Python', 'FastAPI', 'Claude', 'RAG', 'PostgreSQL'],
    accent: 'from-emerald-500/25 via-teal-500/10 to-transparent',
    icon: 'bot',
    image: 'perfectcsr.webp',
    liveUrl: 'https://perfectcsr.ai',
  },
  {
    name: 'OpenVal.ai',
    category: 'AI SaaS',
    description:
      'AI-powered property valuation and market analysis system that turns raw listing data into instant, defensible valuations.',
    stack: ['Python', 'LLM', 'Embeddings', 'FastAPI'],
    accent: 'from-cyan-500/25 via-sky-500/10 to-transparent',
    icon: 'chart',
    image: 'openval.webp',
    liveUrl: 'https://openval.ai',
  },
  {
    name: 'LLM Bots',
    category: 'AI Agents',
    description:
      'Fleet of production LLM agents with tool use, memory and guardrails — deployed for support, research and back-office automation.',
    stack: ['Claude', 'GPT', 'LangChain', 'Vector DB'],
    accent: 'from-violet-500/25 via-purple-500/10 to-transparent',
    icon: 'sparkles',
    image: 'llmbots.webp',
  },
  {
    name: 'Ticket Luck',
    category: 'AI Agents',
    description:
      'Autonomous ticketing AI agent that classifies, prioritizes and resolves inbound requests end-to-end.',
    stack: ['Python', 'Agents', 'API', 'Automation'],
    accent: 'from-amber-500/25 via-orange-500/10 to-transparent',
    icon: 'ticket',
  },
  {
    name: 'JSON Splitter + Qdrant',
    category: 'Data',
    description:
      'Nested JSON extraction and vector-DB integration tool — automated data pipelines with Qdrant for semantic retrieval. 5.0★ Upwork delivery.',
    stack: ['Python', 'Qdrant', 'Vector DB', 'ETL'],
    accent: 'from-rose-500/25 via-pink-500/10 to-transparent',
    icon: 'database',
  },
  {
    name: 'Drowsiness Detection',
    category: 'Computer Vision',
    description:
      'Real-time computer-vision system that detects driver fatigue from webcam streams and raises alerts before it matters.',
    stack: ['Python', 'OpenCV', 'ML'],
    accent: 'from-blue-500/25 via-indigo-500/10 to-transparent',
    icon: 'eye',
    image: 'drowsiness.webp',
  },
  {
    name: 'FIMBAY',
    category: 'Web',
    description:
      'Multi-vendor e-commerce marketplace built with Django — vendors, storefronts, payments, the whole bazaar.',
    stack: ['Django', 'Python', 'jQuery', 'Bootstrap'],
    accent: 'from-teal-500/25 via-emerald-500/10 to-transparent',
    icon: 'cart',
    image: 'fimbay.webp',
  },
  {
    name: 'FAYVO',
    category: 'Web',
    description:
      'Social favorites application — save, organize and share the things you love across every category.',
    stack: ['Python', 'REST API', 'Mobile Backend'],
    accent: 'from-fuchsia-500/25 via-violet-500/10 to-transparent',
    icon: 'heart',
    image: 'fayvo.webp',
  },
]

export const projectCategories = ['All', 'AI SaaS', 'AI Agents', 'Data', 'Computer Vision', 'Web']

export const experience = [
  {
    role: 'Full Stack Developer',
    company: 'Sofizar',
    period: 'Aug 2023 — Present',
    points: [
      'Core developer on the Truckistan platform team.',
      'Own end-to-end features across Python backends and modern JS frontends.',
      'Ship AI-assisted features into production workflows.',
    ],
  },
  {
    role: 'Python ML/AI Engineer',
    company: 'ILSA Interactive',
    period: 'Jun 2022 — Aug 2023',
    points: [
      'Machine Learning engineer & data-scientist technical consultant.',
      'Data mining, model selection, scraping, cleaning and collection at scale.',
      'Built training-ready datasets powering client ML products.',
    ],
  },
  {
    role: 'Python Developer',
    company: 'Saw Developers',
    period: 'Jun 2021 — May 2022',
    points: [
      'Built FIMBAY, a multi-vendor e-commerce marketplace in Django.',
      'Full-stack delivery: Python, CSS3, Bootstrap, jQuery and Ajax.',
      'Owned deployments and production maintenance.',
    ],
  },
]

export const testimonials = [
  {
    quote:
      'Would definitely recommend working with Hamza — very reliable and committed to his work.',
    author: 'Upwork Client',
    project: 'JSON Splitting & Qdrant Vector DB Integration',
    rating: 5,
  },
  {
    quote: 'The AI handles 70% of our support tickets automatically now.',
    author: 'SaaS Founder',
    project: 'PerfectCSR.ai',
    rating: 5,
  },
  {
    quote: 'Response time dropped from hours to seconds.',
    author: 'Operations Lead',
    project: 'AI Support Automation',
    rating: 5,
  },
]

export const education = {
  degree: 'BSc Software Engineering',
  school: 'The Superior College',
  period: '2018 — 2022',
}

export const certification = {
  name: 'Cisco Certified Technician (CCT) — Routing & Switching',
  issuer: 'Cisco',
  period: 'Feb 2022 — Feb 2025',
}
