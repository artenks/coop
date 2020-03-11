import Item from './item';

export default interface ItemGroup<T> extends Item<T> {
  children: Item<T>[];
}
