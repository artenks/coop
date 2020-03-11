import React, { useCallback, useState } from 'react';
import { DndProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import DropZone from 'components/DropZone';
import Mockup from 'components/Mockup';
import VerticalContainer, {
  VerticalContainerPreview,
} from 'components/VerticalContainer';
import Item from 'domain/item';
import { ItemTypes } from 'domain/item-types';
import { Wrapper, Container, DropZoneContainer } from 'styles';
import GlobalStyle from 'styles/global';

const App: React.FC = () => {
  const [mainComponent, setMainComponent] = useState<Item<{}>>();

  const handleDrop = useCallback((item: Item<{}>) => {
    setMainComponent(item);
  }, []);

  const renderMainComponent = useCallback(() => {
    return <VerticalContainer childCount={4} />;
  }, []);

  return (
    <>
      <Wrapper>
        <DndProvider backend={HTML5Backend}>
          <Container>
            <Mockup />
            <DropZoneContainer>
              {mainComponent ? (
                renderMainComponent()
              ) : (
                <DropZone
                  onDrop={handleDrop}
                  accept={[
                    ItemTypes.HORIZONTAL_CONTAINER,
                    ItemTypes.VERTICAL_CONTAINER,
                  ]}
                />
              )}
            </DropZoneContainer>
          </Container>

          <VerticalContainerPreview />
        </DndProvider>
      </Wrapper>

      <GlobalStyle />
    </>
  );
};

export default App;
