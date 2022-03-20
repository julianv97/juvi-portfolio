import { Tooltip, Box, Icon } from '@chakra-ui/react';
import { IconType } from 'react-icons';
import React from 'react';

interface Props {
  label: string;
  icon: IconType;
  onClick?: () => void;
  size?: number;
}

const TooltipIcon: React.FC<Props> = ({ label, icon, onClick = () => {}, size = 34 }) => {
  return (
    <Tooltip label={label}>
      <Box onClick={onClick}>
        <Icon boxSize={size} as={icon} cursor="pointer" />
      </Box>
    </Tooltip>
  );
};

export default TooltipIcon;
