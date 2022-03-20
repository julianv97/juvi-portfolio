import React from 'react';
import IconLink from '../../IconLink';
import SOCIAL_LINKS from '../constans';

const SocialLinks = () => {
  return (
    <>
      {SOCIAL_LINKS.map((link) => (
        <IconLink
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noreferrer"
          icon={link.icon}
        />
      ))}
    </>
  );
};

export default SocialLinks;
