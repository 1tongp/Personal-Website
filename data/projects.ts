// data/projects.ts
export type Project = {
  id: string;
  title: string;
  year: number;
  role: string;
  tags: string[];
  summary: string;
  metrics?: { label: string; value: string }[];
  demo?: string;      // optional demo link
  github?: string;    // optional github link
  paper?: string;     // optional paper link
};

export const projects = [
  {
    id: 'rag-bot',
    title: 'Document Q&A Chatbot (RAG + OpenAI)',
    year: 2025,
    role: 'AI',
    tags: ['RAG', 'OpenAI', 'ChromaDB', 'React', 'Flask'],
    summary: 'PDF upload + semantic retrieval + LLM answers. Includes prompt-injection defense & history compression.',
    metrics: [{ label: 'Search Time ↓', value: '-70%' }],
    github: 'https://github.com/1tongp/Document_QA_Bot',
    demo: 'https://document-qa-bot.vercel.app/'
  },
  {
    id: 'local-rag',
    title: 'Local RAG (No external API)',
    year: 2025,
    role: 'AI',
    tags: ['RAG', 'Embeddings', 'LLM', 'Security'],
    summary: 'Local embeddings & inference for sensitive data (PII/PHI).',
    github: 'https://github.com/1tongp/localRAG'
  },
  {
    id: 'test-data-gen',
    title: 'AI Test Data Generator (In Progress)',
    year: 2025,
    role: 'AI',
    tags: ['Excel', 'CSV', 'XLSX', 'Generator'],
    summary: 'Generate diverse test data, including edge/invalid cases.',
    github: ''
  },
  {
    id: 'donor-rag',
    title: 'RAG Donor Eligibility Checker (In Progress)',
    year: 2025,
    role: 'AI',
    tags: ['RAG', 'Embeddings', 'Chatbot', 'LLM', 'Security'],
    summary: 'Retrieval-Augmented system to check donor info and determine eligibility to donate.',
    github: 'https://github.com/1tongp/Donor-Eligibility-Checker'
  },
  {
    id: 'metaverse-edu',
    title: 'Metaverse for Virtual Education',
    year: 2024,
    role: 'AI',
    tags: ['Metaverse', 'Unity', 'C#', 'PHP', 'Recommendation System', 'Research'],
    summary: 'University Research Project: immersive metaverse platform for virtual education, with recommendation system for personalized learning.',
    paper: 'Yitong(Daisy)Pei_Metaverse_for_Virtual_Education.pdf'
  },
  {
    id: 'personal-website',
    title: 'Personal Portfolio Website',
    year: 2022,
    role: 'SWE',
    tags: ['MERN', 'MongoDB', 'Express', 'React', 'Node.js'],
    summary: 'My personal portfolio website showcasing my projects and skills, built with MERN stack.',
    github: 'https://github.com/1tongp/Personal-Website#'
  },
  {
    id: 'hsbc-crm',
    title: 'HSBC CRM System (MERN)',
    year: 2021,
    role: 'SWE',
    tags: ['MERN', 'MongoDB', 'Express', 'React', 'Node.js'],
    summary: 'University Project: customer relationship management system for HSBC, developed with MERN stack.',
    github: 'https://github.com/1tongp/CRM-RoomOfRequirements'
  },
  {
    id: 'foodshop-cafe',
    title: 'UniMelb Food Shop App for SnacksInVan Cafe (MERN)',
    year: 2021,
    role: 'SWE',
    tags: ['MERN', 'MongoDB', 'Express', 'React', 'Node.js'],
    summary: 'University Project: full-stack café ordering web application for both user and vendor side for UniMelb campus café.',
    github: 'https://github.com/1tongp/SnacksInVan-KeepItSimple'
  },
];


export const allTags = Array.from(new Set(projects.flatMap(p => p.tags))).sort();
