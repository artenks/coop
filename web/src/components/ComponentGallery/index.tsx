import React from 'react';
import {
  MdViewAgenda,
  MdLayers,
  MdBookmark,
  MdFavorite,
  MdAccountCircle,
  MdAccessTime,
  MdShare,
  MdComment,
  MdLink,
  MdRemove,
  MdImage,
  MdFormatSize,
} from 'react-icons/md';

import { ItemTypes } from 'domain/item-types';

import ComponentPreview from './ComponentPreview';
import Separator from './Separator';
import { Container } from './styles';

const ComponentGallery: React.FC = () => {
  return (
    <Container>
      <ComponentPreview
        item={{
          name: 'Linear Container',
          icon: <MdViewAgenda size={20} />,
          type: ItemTypes.LINEAR_CONTAINER,
        }}
      />
      <ComponentPreview
        item={{
          name: 'Layer Container',
          icon: <MdLayers size={20} />,
          type: ItemTypes.LAYER_CONTAINER,
        }}
      />
      <ComponentPreview
        item={{
          name: 'Text',
          icon: <MdFormatSize size={20} />,
          type: ItemTypes.TEXT,
        }}
      />
      <ComponentPreview
        item={{
          name: 'Image',
          icon: <MdImage size={20} />,
          type: ItemTypes.IMAGE,
        }}
      />
      <ComponentPreview
        item={{
          name: 'Separator',
          icon: <MdRemove size={20} />,
          type: ItemTypes.SEPARATOR,
        }}
      />
      <ComponentPreview
        item={{
          name: 'Link',
          icon: <MdLink size={20} />,
          type: ItemTypes.LINK,
        }}
      />

      <Separator />

      <ComponentPreview
        item={{
          name: 'Comments',
          icon: <MdComment size={20} />,
          type: ItemTypes.COMMENT,
        }}
      />

      <ComponentPreview
        item={{
          name: 'Share',
          icon: <MdShare size={20} />,
          type: ItemTypes.SHARE,
        }}
      />

      <ComponentPreview
        item={{
          name: 'Post Time',
          icon: <MdAccessTime size={20} />,
          type: ItemTypes.POST_TIME,
        }}
      />

      <ComponentPreview
        item={{
          name: 'User Informations',
          icon: <MdAccountCircle size={20} />,
          type: ItemTypes.USER_INFORMATIONS,
        }}
      />

      <ComponentPreview
        item={{
          name: 'Like',
          icon: <MdFavorite size={20} />,
          type: ItemTypes.LIKE,
        }}
      />

      <ComponentPreview
        item={{
          name: 'Save',
          icon: <MdBookmark size={20} />,
          type: ItemTypes.SAVE,
        }}
      />
    </Container>
  );
};

export default ComponentGallery;
