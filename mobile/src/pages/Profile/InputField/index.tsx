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
}

const InputField: React.FC<Props> = ({icon, content}) => {
  const theme = useTypedSelector(state => state.settings.theme);

  const [isModalOpenned, setModalOpenned] = useState(false);

  const handleOpenModal = useCallback(() => {
    setModalOpenned(true);
  }, []);

  const handleCloseModal = useCallback(() => {
    setModalOpenned(false);
  }, []);

  const drawIcon = () => {
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
  };

  return (
    <>
      <Container onPress={handleOpenModal}>
        {drawIcon()}
        <Label>{content}</Label>
      </Container>

      <EditDialog
        text={content}
        isVisible={isModalOpenned}
        onClose={handleCloseModal}>
        {drawIcon()}
      </EditDialog>
    </>
  );
};

export default InputField;
