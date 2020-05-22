import React, { ReactElement } from 'react';

import Node from '../Node';
import { Wrapper, Container, Label } from './styles';

interface Props {
  label: string;
  children: ReactElement<Node> | ReactElement<Node>[];
}

const NodeGroup: React.FC<Props> = ({ label, children }) => {
  return (
    <Wrapper>
      <Label>{label}</Label>
      <Container>{children}</Container>
    </Wrapper>
  );
};

export default NodeGroup;
