import React from 'react';
import {StyleSheet} from 'react-native';
import Modal from 'react-native-modal';

import {Container} from './styles';

export interface BottomSheetProps {
  isVisible: boolean;
  onClose(): void;
}

const styles = StyleSheet.create({
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
});

const BottomSheet: React.FC<BottomSheetProps> = ({
  isVisible,
  onClose,
  children,
}) => {
  return (
    <Modal
      isVisible={isVisible}
      onBackButtonPress={onClose}
      onSwipeComplete={onClose}
      swipeDirection={['down']}
      onBackdropPress={onClose}
      backdropColor="rgba(0, 0, 0, 0.6)"
      style={styles.modal}>
      <Container>{children}</Container>
    </Modal>
  );
};

export default BottomSheet;
