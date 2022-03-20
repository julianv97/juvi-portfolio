import React from 'react';
import { Icon } from '@chakra-ui/react';

interface Props {
  icon: any;
  href: string;
  target: string;
  rel: string;
}

const CustomLink: React.FC<Props> = ({ icon, href, target, rel }) => {
  return (
    <a href={href} target={target} rel={rel}>
      <Icon boxSize={34} as={icon} />
    </a>
  );
};

export default CustomLink;
