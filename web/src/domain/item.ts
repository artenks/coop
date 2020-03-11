import { ItemTypes } from './item-types';

export default interface Item {
  name: string;
  type: ItemTypes;
  props: object;
}
