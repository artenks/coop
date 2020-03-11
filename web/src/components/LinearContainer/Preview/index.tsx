import React from 'react';
import { useDrag } from 'react-dnd';
import { MdViewStream } from 'react-icons/md';

import { ItemTypes } from 'domain/item-types';

const Preview: React.FC = () => {
  const [, drag] = useDrag({
    item: { type: ItemTypes.VERTICAL_CONTAINER },
  });

  return (
    <div ref={drag}>
      <MdViewStream size={24} />
    </div>
  );
};

export default Preview;
