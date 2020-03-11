import Item from './item';

export default interface ItemGroup extends Item {
  children: Item[];
}
