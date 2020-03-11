import React, {useRef, useCallback, useState} from 'react';
import {TextInput, TouchableWithoutFeedback, Keyboard} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import BottomSheet from '~/components/BottomSheet';
import Title from '~/components/BottomSheet/Title';

import {Wrapper, Field, Content, RoundButton} from './styles';

interface Props {
  title: string;
  text: string;
  isVisible: boolean;
  onClose(): void;
  onSubmit(value: string): boolean;
}

const EditDialog: React.FC<Props> = ({
  isVisible,
  title,
  text,
  onClose,
  onSubmit,
}) => {
  const [value, setValue] = useState(text);
  const inputRef = useRef<TextInput>(null);

  const handleOnShow = useCallback(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [inputRef]);

  const handleSubmit = useCallback(() => {
    if (onSubmit(value)) {
      Keyboard.dismiss();
    }
  }, [onSubmit, value]);

  return (
    <BottomSheet onClose={onClose} isVisible={isVisible} onShow={handleOnShow}>
      <Wrapper>
        <Title>{title}</Title>

        <Content>
          <Field
            returnKeyType="done"
            value={value}
            onChangeText={setValue}
            ref={inputRef}
          />
          <TouchableWithoutFeedback onPress={handleSubmit}>
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
