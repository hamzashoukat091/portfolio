export const profile = {
  name: 'Hamza Shoukat',
  role: 'Senior AI Python Developer',
  tagline: 'Turning Vision into Virtual Reality',
  location: 'Lahore, Pakistan',
  company: 'Proximate Solutions',
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
    role: 'Senior AI Python Developer',
    company: 'Proximate Solutions',
    period: 'Jul 2024 — Present',
    points: [
      'Architected PerfectCSR, an AI customer-service platform with bot management, conversation handling and agentic decision-making.',
      'Shipped Claude 4 / GPT-4.5 with advanced RAG for context-aware responses, plus an Agent Controller for autonomous tool selection and workflow automation.',
      'Built universal web-crawling pipelines integrating WooCommerce, Shopify, BigCommerce and messaging platforms on a scalable FastAPI + PostgreSQL backend.',
    ],
  },
  {
    role: 'Full Stack Developer / Data Engineer',
    company: 'Daria Technologies · NIC LUMS',
    period: 'Jul 2023 — Jul 2024',
    points: [
      'Built advanced LLM workflows — chains, agents and function calling — to automate complex tasks (Sofizar team).',
      'Deployed Llama 3-8B, Falcon, Claude 3 and e5-Large on AWS SageMaker with data-engineering preprocessing pipelines.',
      'Created knowledge-base and SQL chatbots, plus a logistics platform for tracking and order booking.',
    ],
  },
  {
    role: 'Python AI/ML Engineer',
    company: 'ILSA Interactive',
    period: 'Jun 2022 — Jul 2023',
    points: [
      'Built web-scraping data pipelines feeding ML models integrated into Django applications (AI FAYVO team).',
      'Improved adult-content detection with Random Forest + Google API labels; cleaned image and video datasets.',
      'Built recommendation systems using matrix factorization and GPT text-embedding-ada-002.',
    ],
  },
  {
    role: 'Python Developer',
    company: 'SAW Developers',
    period: 'Jun 2021 — May 2022',
    points: [
      'Built admin, seller and customer portals on Django MVT for a multi-vendor e-commerce site.',
      'Developed responsive pages with HTML, Bootstrap, jQuery and Ajax.',
      'Managed the codebase on GitHub and deployed to AWS EC2.',
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
  school: 'Superior University',
  period: '2018 — 2022',
}

export const certification = {
  name: 'Cisco Certified Technician (CCT) — Routing & Switching',
  issuer: 'Cisco',
  period: 'Feb 2022 — Feb 2025',
}
