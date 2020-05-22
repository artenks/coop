/* eslint-disable no-plusplus */
import React, { useState, useEffect, ReactNode } from 'react';

import SwipableComponent from 'components/SwipableComponent';
import { ItemTypes } from 'domain/item-types';

import { Container } from './styles';

interface Props {
  childCount?: number;
}

const LinearContainer: React.FC<Props> = ({ childCount = 3 }) => {
  const [drops, setDrops] = useState<ReactNode[]>([]);

  useEffect(() => {
    const data = [];

    for (let i = 0; i < childCount; i++) {
      data.push(
        <SwipableComponent
          accept={[ItemTypes.TEXT, ItemTypes.LAYER_CONTAINER]}
        />,
      );
    }

    setDrops(data);
  }, [childCount]);

  return (
    <Container>
      {drops.map(node => (
        <>{node}</>
      ))}
    </Container>
  );
};

export default LinearContainer;
