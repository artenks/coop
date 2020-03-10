import React from 'react';

import mockup from 'assets/mockup.png';

import { Container, Image } from './styles';

const Mockup: React.FC = () => {
  return (
    <Container>
      <Image src={mockup} />
    </Container>
  );
};

export default Mockup;
