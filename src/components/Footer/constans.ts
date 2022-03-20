import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { IoMdRocket } from 'react-icons/io';

const SOCIAL_LINKS = [
  {
    name: 'Github',
    url: 'https://github.com/julianv97',
    icon: BsGithub,
  },
  {
    name: 'Linkedin',
    url: 'https://www.linkedin.com/in/julian-vicente/',
    icon: BsLinkedin,
  },
  {
    name: 'Radium Rocket',
    url: 'https://radiumrocket.com/',
    icon: IoMdRocket,
    hasTooltip: true,
    label: 'The place I work',
  },
];

export default SOCIAL_LINKS;
