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
    endDate: '2024-12-31',
    summary: 'Worked on a full-stack SaaS application for running LLMs with RAG offline.',
    highlights: [
      'Built the backend from scratch, first in Rust and later in Python',
      'Worked with a variety of APIs for integration and data flow',
      'Tested and evaluated several open-source LLM libraries, including autogen, haystack, langchain, and qdrant',
      'Developed a fully functional agentic RAG system that operated offline',
      'Designed and built the entire database using Supabase, including the handling of migrations',
    ],
  },
  {
    name: '@Técnico',
    position: 'Teaching Assistant',
    url: 'https://tecnico.ulisboa.pt/',
    startDate: '2023-01-01',
    endDate: '2023-12-31',
    summary: '🏆 Awarded Teaching Excellence Diploma.',
    highlights: [
      'Taught Software Engineering (ESof) - Spring 2023 <a href="https://fenix.tecnico.ulisboa.pt/disciplinas/ESof2/2022-2023/2-semestre">Course Details</a>',
      'Taught Software Security (SSof) - Fall 2023 <a href="https://fenix.tecnico.ulisboa.pt/disciplinas/SSof/2022-2023/1-semestre">Course Details</a>',
      'Provided hands-on guidance in cybersecurity practices and software development methodologies',
      'Created and graded assignments, mentored students through complex projects',
    ],
  },
];

export default work;
