import React from 'react';

import SideContainer from 'components/SideContainer';

import Node from './Node';
import NodeGroup from './NodeGroup';

const ComponentTree: React.FC = () => {
  return (
    <SideContainer title="Componentes">
      <Node label="Linear Container" />
      <NodeGroup label="Linear Container">
        <Node label="Linear Container" />
        <Node label="Linear Container" />
      </NodeGroup>
    </SideContainer>
  );
};

export default ComponentTree;
