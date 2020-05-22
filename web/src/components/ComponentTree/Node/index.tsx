import React from 'react';

import { Container } from './styles';

interface Props {
  label: string;
}

const Node: React.FC<Props> = ({ label }) => {
  return <Container>{label}</Container>;
};

export default Node;
