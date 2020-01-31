import React from 'react';

import {Container, Info, Image, Title, Description, Hour} from './styles';

export default function ExploreItem() {
  return (
    <Container>
      <Image />
      <Info>
        <Title>Untitled</Title>
        <Description>Lorem ipsum dolor sit amet...</Description>
      </Info>
      <Hour>00:00</Hour>
    </Container>
  );
}
