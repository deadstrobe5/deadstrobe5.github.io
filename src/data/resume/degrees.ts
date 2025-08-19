export interface Degree {
  school: string;
  degree: string;
  link: string;
  year: number;
  grade?: string;
  specialization?: string;
  id: string; // Added unique ID
}

const degrees: Degree[] = [
  {
    school: 'Instituto Superior Técnico',
    degree: 'Masters in Computer Science and Engineering',
    link: 'https://tecnico.ulisboa.pt/',
    year: 2023,
    grade: '17/20',
    specialization: 'AI and Cybersecurity',
    id: 'ist-masters',
  },
  {
    school: 'Instituto Superior Técnico',
    degree: 'Bachelor in Information Systems and Computer Engineering',
    link: 'https://tecnico.ulisboa.pt/',
    year: 2020,
    grade: '15/20',
    id: 'ist-bachelor',
  },
  {
    school: 'Friedrich-Alexander-Universität Erlangen-Nürnberg',
    degree: 'Erasmus Exchange Program',
    link: 'https://www.fau.eu/',
    year: 2021,
    id: 'fau-erasmus',
  },
];

export default degrees;
