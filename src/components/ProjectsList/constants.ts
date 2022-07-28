import { IProject } from '../../interfaces';

const PROJECTS: IProject[] = [
  {
    id: 1,
    title: 'Countries Finder',
    technologies: ['react', 'react-query', 'typescript', 'chakra-ui', 'react-router-dom'],
    repositoryLink: 'https://github.com/julianv97/countries-finder',
    liveLink: 'https://countries-finder-julianv97.vercel.app/',
    image: 'https://via.placeholder.com/500x300',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl egetconsectetur sagittis, nisl nunc',
  },
  {
    id: 2,
    title: 'Personal Porfolio',
    technologies: ['react', 'typescript', 'react-router-dom', 'chakra-ui'],
    repositoryLink: 'https://github.com/julianv97/juvi-portfolio',
    liveLink: 'https://juvi-portfolio.vercel.app/home',
    image: 'https://via.placeholder.com/500x300',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl egetconsectetur sagittis, nisl nunc',
  },
  {
    id: 3,
    title: 'Project 3',
    technologies: ['react', 'redux', 'typescript'],
    repositoryLink: '',
    liveLink: 'https://countries-finder-julianv97.vercel.app/',
    image: 'https://via.placeholder.com/500x300',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl egetconsectetur sagittis, nisl nunc',
  },
];

export default PROJECTS;
