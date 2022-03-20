import React from 'react';
import { Icon } from '@chakra-ui/react';
import { IconType } from 'react-icons';

interface Props {
  icon: IconType;
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
