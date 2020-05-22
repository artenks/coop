/* eslint-disable no-fallthrough */
import React, { useState, ReactNode, useEffect } from 'react';

import LinearContainer from 'components/LinearContainer';
import { ItemTypes } from 'domain/item-types';

export function useResolveComponent(type?: ItemTypes): ReactNode {
  const [node, setNode] = useState<ReactNode>();

  useEffect(() => {
    switch (type) {
      case ItemTypes.LINEAR_CONTAINER:
        setNode(<LinearContainer />);
        break;
      case ItemTypes.TEXT:
        setNode(<span>Text</span>);
        break;
      default:
        break;
    }
  }, [type]);

  return node;
}
