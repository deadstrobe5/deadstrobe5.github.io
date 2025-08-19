export interface Skill {
  title: string;
  competency: number;
  category: string[];
}

export interface Category {
  name: string;
  color: string;
}

const skills: Skill[] = [
  {
    title: 'Python',
    competency: 5,
    category: ['Languages', 'AI', 'Backend'],
  },
  {
    title: 'TypeScript',
    competency: 5,
    category: ['Languages', 'Web Development', 'Frontend'],
  },
  {
    title: 'Rust',
    competency: 4,
    category: ['Languages', 'Backend', 'Systems'],
  },
  {
    title: 'C/C++',
    competency: 4,
    category: ['Languages', 'Systems'],
  },
  {
    title: 'OCaml',
    competency: 3,
    category: ['Languages', 'Functional'],
  },
  {
    title: 'Java',
    competency: 3,
    category: ['Languages', 'Backend'],
  },
  {
    title: 'SQL',
    competency: 4,
    category: ['Languages', 'Databases'],
  },
  {
    title: 'Git',
    competency: 5,
    category: ['Tools', 'DevOps'],
  },
  {
    title: 'Docker',
    competency: 4,
    category: ['Tools', 'DevOps'],
  },
  {
    title: 'Linux',
    competency: 4,
    category: ['Tools', 'Systems'],
  },
  {
    title: 'Cursor',
    competency: 4,
    category: ['Tools', 'AI'],
  },
  {
    title: 'Supabase',
    competency: 4,
    category: ['Tools', 'Databases'],
  },
  {
    title: 'Qdrant',
    competency: 4,
    category: ['Tools', 'AI', 'Databases'],
  },
  {
    title: 'LangChain',
    competency: 4,
    category: ['AI', 'LLMs'],
  },
  {
    title: 'RAG',
    competency: 4,
    category: ['AI', 'LLMs'],
  },
  {
    title: 'VectorDBs',
    competency: 4,
    category: ['AI', 'Databases'],
  },
  {
    title: 'Offline LLMs',
    competency: 4,
    category: ['AI', 'LLMs'],
  },
  {
    title: 'CTFs',
    competency: 4,
    category: ['Cybersecurity', 'Ethical Hacking'],
  },
  {
    title: 'HackTheBox',
    competency: 4,
    category: ['Cybersecurity', 'Ethical Hacking'],
  },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

const colors: string[] = [
  '#6968b3', // Languages
  '#37b1f5', // Tools
  '#40494e', // AI
  '#515dd4', // Backend
  '#e47272', // Frontend
  '#cc7b94', // Systems
  '#3896e2', // DevOps
  '#c3423f', // Databases
  '#d75858', // LLMs
  '#747fff', // Cybersecurity
  '#64cb7b', // Ethical Hacking
  '#458588', // Functional
];

const categories: Category[] = Array.from(new Set(skills.flatMap(({ category }) => category)))
  .sort()
  .map((category, index) => ({
    name: category,
    color: colors[index],
  }));

export { categories, skills };
