import React from 'react';
import { DndProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import ComponentGallery from 'components/ComponentGallery';
import ComponentTree from 'components/ComponentTree';
import DesignBuilder from 'components/DesignBuilder';
import Playground from 'components/Playground';
import { Wrapper } from 'styles';
import GlobalStyle from 'styles/global';

const App: React.FC = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <Wrapper>
        <ComponentTree />

        <Playground>
          <DesignBuilder />
          <ComponentGallery />
        </Playground>

        <ComponentTree />
      </Wrapper>

      <GlobalStyle />
    </DndProvider>
  );
};

export default App;
