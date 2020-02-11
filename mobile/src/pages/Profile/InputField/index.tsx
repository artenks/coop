import React, {useState, useCallback} from 'react';
import {Image} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {useTypedSelector} from '~/store';
import Theme, {ThemeSelect} from '~/themes';

import EditDialog from './EditDialog';
import {Container, IconContainer, Label} from './styles';

interface Props {
  icon?: {
    name?: string;
    source?: ThemeSelect;
  };
  content: string;
  placeholder: string;
  isValidValue(text: string): boolean;
}

const InputField: React.FC<Props> = ({
  icon,
  placeholder,
  content,
  isValidValue,
}) => {
  const theme = useTypedSelector(state => state.settings.theme);

  const [isModalOpenned, setModalOpenned] = useState(false);

  const handleOpenModal = useCallback(() => {
    setModalOpenned(true);
  }, []);

  const handleCloseModal = useCallback(() => {
    setModalOpenned(false);
  }, []);

  const handleSubmit = useCallback(
    (value: string): boolean => {
      return isValidValue(value);
    },
    [isValidValue],
  );

  return (
    <>
      <Container onPress={handleOpenModal}>
        {(() => {
          if (icon) {
            if (icon.source) {
              return (
                <IconContainer>
                  <Image source={Theme.select(theme, icon.source)} />
                </IconContainer>
              );
            }

            if (icon.name) {
              return (
                <IconContainer>
                  <Icon name={icon.name} size={24} color="#666" />
                </IconContainer>
              );
            }
          }
        })()}
        <Label>{content || placeholder}</Label>
      </Container>

      <EditDialog
        title={placeholder}
        text={content}
        isVisible={isModalOpenned}
        onClose={handleCloseModal}
        onSubmit={handleSubmit}
      />
    </>
  );
};

export default InputField;
