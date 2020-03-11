/* eslint-disable no-plusplus */
import React, { useState, useEffect } from 'react';

import DropZone from 'components/DropZone';
import { ItemTypes } from 'domain/item-types';

import { Container } from './styles';

interface Props {
  childCount: number;
}

const LinearContainer: React.FC<Props> = ({ childCount }) => {
  const [items, setItems] = useState<string[]>([]);

  useEffect(() => {
    const newItems: string[] = [];

    for (let index = 0; index < childCount; index++) {
      newItems.push(`${index}`);
    }

    setItems(newItems);
  }, [childCount]);

  return (
    <Container>
      {items.map(item => (
        <DropZone
          key={item}
          onDrop={dropedItem => console.log(dropedItem)}
          accept={[ItemTypes.VERTICAL_CONTAINER]}
        />
      ))}
    </Container>
  );
};

export default LinearContainer;

export { default as LinearContainerPreview } from './Preview';
