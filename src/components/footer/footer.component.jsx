import React from 'react';
import { Container, Heading } from './footer.styles';

const Footer = () => {
  return (
    <Container>
      <Heading> Copyright © 2022 Tribe Cold Press Juice Bar </Heading>
      <Heading>
        {' '}
        <a href="https://www.linkedin.com/in/soulyana-lakew-7a0622219/">
          Made by Soulyana
        </a>
      </Heading>
    </Container>
  );
};
export default Footer;
