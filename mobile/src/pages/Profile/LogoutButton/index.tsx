import React from 'react';

import {Container, Text} from './styles';

const FlatIconButton: React.FC = ({children}) => {
  return (
    <Container>
      <Text>{children}</Text>
    </Container>
  );
};

export default FlatIconButton;
