import React from 'react';
import CustomLink from '../../IconLink';
import SOCIAL_LINKS from '../constans';

const SocialLinks = () => {
  return (
    <>
      {SOCIAL_LINKS.map((link) => (
        <CustomLink
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
