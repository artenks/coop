import React from 'react';
import { useDrag } from 'react-dnd';

import { ItemTypes } from 'domain/item-types';

import { Container } from './styles';

const Drag: React.FC = () => {
  const [, drag] = useDrag({
    item: { type: ItemTypes.IMAGE },
  });

  return <Container ref={drag} />;
};

export default Drag;
