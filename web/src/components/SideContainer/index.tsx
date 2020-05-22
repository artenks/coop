import React, { ReactNode } from 'react';

import { Wrapper, Container, Title } from './styles';

interface Props {
  title: string;
  children: ReactNode;
}

const SideContainer: React.FC<Props> = ({ title, children, ...rest }) => {
  return (
    <Wrapper {...rest}>
      <Title>{title}</Title>
      <Container>{children}</Container>
    </Wrapper>
  );
};

export default SideContainer;
