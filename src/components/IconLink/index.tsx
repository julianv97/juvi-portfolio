import React from 'react';
import { Icon } from '@chakra-ui/react';
import { IconType } from 'react-icons';
import TooltipIcon from '../TooltipIcon';

interface Props {
  icon: IconType;
  href: string;
  target: string;
  rel: string;
  hasTooltip?: boolean;
  label?: string;
  size?: number;
}

const CustomLink: React.FC<Props> = ({
  icon,
  href,
  target,
  rel,
  hasTooltip = false,
  label = '',
  size = 34,
}) => {
  return (
    <a href={href} target={target} rel={rel}>
      {hasTooltip ? <TooltipIcon label={label} icon={icon} /> : <Icon boxSize={size} as={icon} />}
    </a>
  );
};

export default CustomLink;
