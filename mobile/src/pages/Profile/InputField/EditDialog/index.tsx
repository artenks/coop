import React, {useRef, useCallback} from 'react';
import {TextInput, TouchableWithoutFeedback} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import BottomSheet from '~/components/BottomSheet';

import {Wrapper, Header, Title, Field, Content, RoundButton} from './styles';

interface Props {
  text: string;
  isVisible: boolean;
  onClose(): void;
}

const EditDialog: React.FC<Props> = ({isVisible, text, onClose, children}) => {
  const inputRef = useRef<TextInput>(null);

  const handleOnShow = useCallback(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [inputRef]);

  return (
    <BottomSheet onClose={onClose} isVisible={isVisible} onShow={handleOnShow}>
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
    </BottomSheet>
  );
};

export default EditDialog;
