import React from 'react';
import { useDrop } from 'react-dnd';

import Item from 'domain/item';

import { Container } from './styles';

interface Props {
  accept: string[];
  onDrop(item: Item<{}>): void;
}

const DropZone: React.FC<Props> = ({ accept, onDrop }) => {
  const [{ isHover }, drop] = useDrop({
    accept,
    drop(item: Item<{}>) {
      onDrop(item);
    },
    collect(monitor) {
      return {
        isHover: monitor.isOver(),
      };
    },
  });

  return (
    <>
      <Container ref={drop} isHover={isHover} />
    </>
  );
};

export default DropZone;
