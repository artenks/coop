import React from 'react';
import { DndProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import ComponentGallery from 'components/ComponentGallery';
import DesignBuild from 'components/DesignBuild';
import { Wrapper } from 'styles';
import GlobalStyle from 'styles/global';

const App: React.FC = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <Wrapper>
        <DesignBuild />

        <ComponentGallery />

        <ComponentGallery />
      </Wrapper>

      <GlobalStyle />
    </DndProvider>
  );
};

export default App;
