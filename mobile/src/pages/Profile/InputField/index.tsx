import React, {useState, useCallback} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import EditDialog from './EditDialog';
import {Container, IconContainer, Label} from './styles';

interface Props {
  icon?: string;
  content: string;
}

const InputField: React.FC<Props> = ({icon, children, content}) => {
  const [isModalOpenned, setModalOpenned] = useState(false);

  const handleOpenModal = useCallback(() => {
    setModalOpenned(true);
  }, []);

  const handleCloseModal = useCallback(() => {
    setModalOpenned(false);
  }, []);

  const drawIcon = () => {
    if (children) {
      return <IconContainer>{children}</IconContainer>;
    }

    if (icon) {
      return (
        <IconContainer>
          <Icon name={icon} size={24} color="#666" />
        </IconContainer>
      );
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
