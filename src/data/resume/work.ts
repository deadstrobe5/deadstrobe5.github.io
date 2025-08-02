/**
 * Conforms to https://jsonresume.org/schema/
 */
export interface Position {
  name: string;
  position: string;
  url: string;
  startDate: string;
  endDate?: string;
  summary?: string;
  highlights?: string[];
}

const work: Position[] = [
  {
    name: '@EdgenAI',
    position: 'Full-Stack Engineer',
    url: 'https://edgen.co/',
    startDate: '2024-01-01',
    summary: 'Working on a full-stack SaaS application for running LLMs with RAG offline.',
    highlights: [
      'Built a full-stack SaaS application for running LLMs with RAG offline',
      'Worked mainly in the backend server (Python & Rust), API connections, building the RAG system and Database migrations',
    ],
  },
  {
    name: '@Técnico',
    position: 'Teaching Assistant',
    url: 'https://tecnico.ulisboa.pt/',
    startDate: '2023-01-01',
    endDate: '2023-12-31',
    summary: 'Teaching Assistant for Cybersecurity and Software Engineering courses.',
    highlights: [
      'Taught Cybersecurity and Software Engineering courses',
      'Helped students with course materials and projects',
      'Graded assignments and provided feedback',
    ],
  },
  {
    name: 'Personal Project',
    position: 'Developer',
    url: '#',
    startDate: '2023-01-01',
    summary: 'Building a browser game automation bot with subscription model.',
    highlights: [
      'Developing a bot for an online browser game',
      'Fully written in TypeScript, works as a browser extension',
      'Planning to release it and sell subscriptions',
    ],
  },
  {
    name: 'STT - Security Team @ Técnico',
    position: 'Member',
    url: '#',
    startDate: '2022-01-01',
    summary: "Member of Técnico's Hacking Team - #1 in Portugal",
    highlights: [
      'Participated in CTF competitions',
      'Specialized in ethical hacking and cybersecurity',
      'Contributed to team success and knowledge sharing',
    ],
  },
];

export default work;