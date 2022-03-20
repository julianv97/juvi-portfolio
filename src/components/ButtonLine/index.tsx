import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Button } from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import { motion } from 'framer-motion';

interface Props {
  title: string;
  path: string;
}

const ButtonLine: React.FC<Props> = ({ title, path }) => {
  const AnimatedArrow = motion(ArrowForwardIcon);
  return (
    <RouterLink to={path}>
      <Button
        color="primary"
        fontSize="sm"
        fontWeight="regular"
        maxW="min-content"
        variant="link"
        _hover={{
          color: 'blue.500',
          textDecoration: 'underline',
        }}
      >
        {title}
        <AnimatedArrow />
      </Button>
    </RouterLink>
  );
};

export default ButtonLine;
