import React from 'react';
import { DndProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import ComponentGallery from 'components/ComponentGallery';
import DesignBuilder from 'components/DesignBuilder';
import Playground from 'components/Playground';
import SideContainer from 'components/SideContainer';
import { Wrapper } from 'styles';
import GlobalStyle from 'styles/global';

const App: React.FC = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <Wrapper>
        <SideContainer />

        <Playground>
          <DesignBuilder />
          <ComponentGallery />
        </Playground>

        <SideContainer />
      </Wrapper>

      <GlobalStyle />
    </DndProvider>
  );
};

export default App;
