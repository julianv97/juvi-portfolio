import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Button } from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';

interface Props {
  title: string;
  path: string;
}

const ButtonLine: React.FC<Props> = ({ title, path }) => {
  return (
    <RouterLink to={path}>
      <Button
        color="primary"
        fontSize="sm"
        fontWeight="regular"
        maxW="min-content"
        rightIcon={<ArrowForwardIcon />}
        variant="link"
      >
        {title}
      </Button>
    </RouterLink>
  );
};

export default ButtonLine;
