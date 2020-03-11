import React from 'react';
import Scrollbar from 'react-perfect-scrollbar';

import { Container } from './styles';

const ComponentGallery: React.FC = () => {
  return (
    <Container>
      <strong>Componentes</strong>
      <Scrollbar>
        <div>Opa</div>
      </Scrollbar>
    </Container>
  );
};

export default ComponentGallery;
