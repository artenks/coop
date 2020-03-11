import React, { useState, useCallback } from 'react';

import Item from 'domain/item';
import { ItemTypes } from 'domain/item-types';

import Mockup from './Mockup';
import { Container, DropZoneContainer, MainDropZone } from './styles';

const DesignBuild: React.FC = () => {
  const [mainComponent, setMainComponent] = useState<Item>();

  const handleDrop = useCallback((item: Item) => {
    setMainComponent(item);
  }, []);

  const renderMainComponent = useCallback(() => {
    return <div />;
  }, []);

  return (
    <Container>
      <Mockup />
      <DropZoneContainer>
        {mainComponent ? (
          renderMainComponent()
        ) : (
          <MainDropZone
            onDrop={handleDrop}
            accept={[
              ItemTypes.HORIZONTAL_CONTAINER,
              ItemTypes.VERTICAL_CONTAINER,
            ]}
          />
        )}
      </DropZoneContainer>
    </Container>
  );
};

export default DesignBuild;
