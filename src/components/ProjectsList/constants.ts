import { IProject } from '../../interfaces';

const PROJECTS: IProject[] = [
  {
    id: 1,
    title: 'Countries Finder',
    technologies: ['react', 'react-query', 'typescript', 'chakra-ui', 'react-router-dom'],
    repositoryLink: 'https://github.com/julianv97/countries-finder',
    liveLink: 'https://countries-finder-julianv97.vercel.app/',
    image: '../../assets/WhatsApp Image 2022-07-24 at 8.25.42 PM.jpeg',
  },
  {
    id: 2,
    title: 'Personal Porfolio',
    technologies: ['react', 'typescript', 'react-router-dom', 'chakra-ui'],
    repositoryLink: 'https://github.com/julianv97/juvi-portfolio',
    liveLink: 'https://juvi-portfolio.vercel.app/home',
  },
  {
    id: 3,
    title: 'Project 3',
    technologies: ['React', 'Redux', 'TypeScript'],
    repositoryLink: '',
    liveLink: 'https://countries-finder-julianv97.vercel.app/',
  },
];

export default PROJECTS;
