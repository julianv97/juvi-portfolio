import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Button } from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import { motion } from 'framer-motion';

interface Props {
  title: string;
  path: string;
}

const ButtonLine: React.FC<Props> = ({ title, path }) => {
  const [isHovered, setIsHovered] = useState(false);
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
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {title}
        <AnimatedArrow
          animate={{
            x: isHovered ? 7 : 0,
            scale: isHovered ? 1.2 : 1,
          }}
        />
      </Button>
    </RouterLink>
  );
};

export default ButtonLine;
