import React from 'react';

import BottomSheet from '~/components/BottomSheet';

import {Container} from './styles';

interface Props {
  isVisible: boolean;
  onClose(): void;
}

const InfoSheet: React.FC<Props> = ({isVisible, onClose}) => {
  return (
    <BottomSheet isVisible={isVisible} onClose={onClose}>
      <Container />
    </BottomSheet>
  );
};

export default InfoSheet;
