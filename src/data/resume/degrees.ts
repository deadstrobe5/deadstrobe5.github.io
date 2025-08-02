export interface Degree {
  school: string;
  degree: string;
  link: string;
  year: number;
  grade?: string;
  specialization?: string;
}

const degrees: Degree[] = [
  {
    school: 'Instituto Superior Técnico',
    degree: 'Masters in Computer Science and Engineering',
    link: 'https://tecnico.ulisboa.pt/',
    year: 2024,
    grade: '17/20',
    specialization: 'AI and Cybersecurity',
  },
  {
    school: 'Instituto Superior Técnico',
    degree: 'Bachelor in Information Systems and Computer Engineering',
    link: 'https://tecnico.ulisboa.pt/',
    year: 2022,
    grade: '15/20',
  },
  {
    school: 'Friedrich-Alexander-Universität Erlangen-Nürnberg',
    degree: 'Erasmus Exchange Program',
    link: 'https://www.fau.eu/',
    year: 2021,
  },
];

export default degrees;