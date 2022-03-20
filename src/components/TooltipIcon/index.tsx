import { Tooltip, Box, Icon } from '@chakra-ui/react';
import React from 'react';

interface Props {
  label: string;
  icon: any;
}

const TooltipIcon: React.FC<Props> = ({ label, icon }) => {
  return (
    <Tooltip label={label}>
      <Box>
        <Icon boxSize={34} as={icon} cursor="pointer" />
      </Box>
    </Tooltip>
  );
};

export default TooltipIcon;
