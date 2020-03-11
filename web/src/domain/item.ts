import { ItemTypes } from './item-types';

export default interface Item<T> {
  name: string;
  type: ItemTypes;
  props: T;
}
