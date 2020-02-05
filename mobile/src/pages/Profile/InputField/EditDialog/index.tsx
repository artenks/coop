import React, {useRef} from 'react';
import {
  TextInput,
  StyleSheet,
  TouchableWithoutFeedback,
} from 'react-native';
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {Wrapper, Header, Title, Field, Content, RoundButton} from './styles';

interface Props {
  text: string;
  isVisible: boolean;
  onClose(): void;
}

const styles = StyleSheet.create({
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
    elevation: 16,
  },
});

const EditDialog: React.FC<Props> = ({isVisible, text, onClose, children}) => {
  const inputRef = useRef<TextInput>(null);

  return (
    <Modal
      onSwipeComplete={onClose}
      swipeDirection={['down']}
      isVisible={isVisible}
      onShow={() => inputRef.current?.focus()}
      onBackdropPress={onClose}
      backdropColor="rgba(0, 0, 0, 0.6)"
      onBackButtonPress={onClose}
      style={styles.modal}>
      <Wrapper>
        <Header>
          {children}
          <Title>{text}</Title>
        </Header>

        <Content>
          <Field ref={inputRef}>{text}</Field>
          <TouchableWithoutFeedback onPress={() => {}}>
            <RoundButton>
              <Icon name="save" size={24} color="#fff" />
            </RoundButton>
          </TouchableWithoutFeedback>
        </Content>
      </Wrapper>
    </Modal>
  );
};

export default EditDialog;
