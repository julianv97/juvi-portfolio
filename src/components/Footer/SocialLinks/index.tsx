import { Flex } from '@chakra-ui/react';
import React from 'react';
import IconLink from '../../IconLink';
import SOCIAL_LINKS from '../constans';

const SocialLinks = () => {
  return (
    <Flex justifyContent="space-around" w="36">
      {SOCIAL_LINKS.map((link) => (
        <IconLink
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noreferrer"
          icon={link.icon}
          hasTooltip={link.hasTooltip}
          label={link.label}
        />
      ))}
    </Flex>
  );
};

export default SocialLinks;
