import React from 'react';
import { useDrag } from 'react-dnd';

import Item from 'domain/item';

import { Container } from './styles';

interface Props {
  item: Item;
}

const ComponentPreview: React.FC<Props> = ({ item }) => {
  const [, drop] = useDrag({
    item: { type: item.type },
  });

  return (
    <Container ref={drop}>
      {item.icon}
      <span>{item.name}</span>
    </Container>
  );
};

export default ComponentPreview;
