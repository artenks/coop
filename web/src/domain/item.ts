import { ReactNode } from 'react';

import { ItemTypes } from './item-types';

export default interface Item {
  name: string;
  type: ItemTypes;
  icon?: ReactNode;
  props?: object;
}
