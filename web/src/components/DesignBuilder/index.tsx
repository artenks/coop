import React, { useState, useCallback } from 'react';

import Item from 'domain/item';
import { ItemTypes } from 'domain/item-types';
import { useResolveComponent } from 'util/resolve-component';

import Mockup from './Mockup';
import { Container, DropZoneContainer, MainDropZone } from './styles';

const DesignBuilder: React.FC = () => {
  const [type, setType] = useState<ItemTypes>();
  const mainComponent = useResolveComponent(type);

  const handleDrop = useCallback((item: Item) => {
    setType(item.type);
  }, []);

  return (
    <Container>
      <Mockup />
      <DropZoneContainer>
        {mainComponent || (
          <MainDropZone
            onDrop={handleDrop}
            accept={[ItemTypes.LINEAR_CONTAINER, ItemTypes.LAYER_CONTAINER]}
          />
        )}
      </DropZoneContainer>
    </Container>
  );
};

export default DesignBuilder;
