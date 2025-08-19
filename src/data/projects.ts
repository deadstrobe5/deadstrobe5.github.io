export interface Project {
  title: string;
  link?: string;
  desc: string;
}

export interface ProjectSection {
  title: string;
  projects: Project[];
}

const data: ProjectSection[] = [
  {
    title: 'Personal Projects',
    projects: [
      {
        title: 'TribalKit',
        link: 'https://tribalkit.com/',
        desc: `A premium browser extension for automating Tribal Wars gameplay. Written entirely in TypeScript, TribalKit offers advanced automation tools like AutoDefense, real-time analytics, and modular features to help players optimize defense and gain a competitive edge. Commercial, subscription-based project.`,
      },
      {
        title: 'Books AI',
        link: 'https://github.com/deadstrobe5/BooksAI',
        desc: `A RAG (Retrieval-Augmented Generation) system I originally built to help my sister prepare for her law exams. The system processes books, using OCR and embeddings to make the content searchable and interactive. Built with Python, it performs automatic PDF processing with OCR detection, stores vectors in Qdrant, and features a chat interface powered by GPT. It processes texts and enables contextual Q&A.`,
      },
      {
        title: 'Task Rotation Scheduler',
        link: 'https://github.com/deadstrobe5/tarefas-familia',
        desc: `A fair task rotation scheduler for household chores. It generates mathematically balanced schedules, ensuring each person works with every other person and rotates through all tasks evenly. Supports multiple categories, exports to HTML/PDF, and includes a command-line interface. Built with Python and PuLP.`,
      },
    ],
  },
  {
    title: 'University Projects',
    projects: [
      {
        title: 'Systems & Network Security',
        link: 'https://github.com/deadstrobe5/sirs-1',
        desc: 'A contact tracing system  designed for both secure operation and testing of network and mobile vulnerabilities. Includes an Android app (requires two phones with Bluetooth), backend server, and health authority service. Developed with AdoptOpenJDK 8, Gradle, MySQL, and Python, the project enables simulation of infection scenarios and secure BLE-based data exchange.',
      },
      {
        title: 'Compilers',
        link: 'https://github.com/deadstrobe5/COM-Project',
        desc: 'Extended a custom compiler using CDK, implementing incremental lexical, syntactic, and semantic analysis, as well as code generation with flex, byacc, and custom AST nodes.',
      },
      {
        title: 'Software Engineering',
        link: 'https://github.com/deadstrobe5/ES-Copy',
        desc: 'Full-stack project using Vue.js (frontend) and Spring Boot (backend) for quiz management. Developed in a team, we implemented new features, wrote tests, and learned proper Git workflows for collaborative software engineering.',
      },
      {
        title: 'Natural Language',
        link: 'https://github.com/deadstrobe5/LN',
        desc: 'Developed a Portuguese Metaphone phonetic transducer, implementing and testing rule-based transformations.',
      },
      {
        title: 'Computer Architecture',
        link: 'https://github.com/deadstrobe5/IAC-Project',
        desc: 'Implemented the Mastermind game in Assembly for the P3 processor. Managed 7-segment display output, binary encoding, and real-time peripheral control. Focused on efficient bitwise operations and hardware-level logic.',
      },
      {
        title: 'Computer Networks',
        link: 'https://github.com/deadstrobe5/RC',
        desc: 'Developed a distributed forum system in C with both TCP and UDP support.',
      },
      {
        title: 'Logic for Programming',
        link: 'https://github.com/deadstrobe5/LP',
        desc: 'A Prolog project for solving logic puzzles, featuring custom constraint propagation and combinatorial search. Implements efficient backtracking and list operations to handle puzzle rules and solution validation.',
      },
      {
        title: 'Highly Dependable Systems',
        link: 'https://github.com/deadstrobe5/sec',
        desc: 'Designed and implemented a distributed, fault-tolerant location reporting system in Java/Spring Boot with MySQL, supporting Byzantine fault tolerance, cryptographic authentication, and multi-entity coordination (clients, servers, health authority).',
      },
      {
        title: '3D Programming',
        link: 'https://github.com/lucaspiper99/gpu-ray-tracing',
        desc: 'Developed a progressive GPU ray tracer using GLSL and Shadertoy, implementing sphere/triangle intersections, global illumination, shadows, reflections, refraction, motion blur, and depth-of-field. Learned GPU parallelism, shader programming, and advanced rendering techniques.',
      },
    ],
  },
];

export default data;
