import { Tooltip, Box, Icon } from '@chakra-ui/react';
import { IconType } from 'react-icons';
import React from 'react';

interface Props {
  label: string;
  icon: IconType;
  onClick?: () => void;
}

const TooltipIcon: React.FC<Props> = ({ label, icon, onClick = () => {} }) => {
  return (
    <Tooltip label={label}>
      <Box onClick={onClick}>
        <Icon boxSize={34} as={icon} cursor="pointer" />
      </Box>
    </Tooltip>
  );
};

export default TooltipIcon;
