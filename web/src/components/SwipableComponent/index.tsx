import React, { useCallback, useState } from 'react';

import DropZone from 'components/DropZone';
import Item from 'domain/item';
import { ItemTypes } from 'domain/item-types';
import { useResolveComponent } from 'util/resolve-component';

// import { Container } from './styles';

interface Props {
  accept: string[];
}

const SwipableComponent: React.FC<Props> = ({ accept }) => {
  const [type, setType] = useState<ItemTypes>();

  const component = useResolveComponent(type);

  const onDrop = useCallback((item: Item) => {
    setType(item.type);
  }, []);

  return <>{component || <DropZone {...{ accept, onDrop }} />}</>;
};

export default SwipableComponent;
