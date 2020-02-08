import React, {useState, useCallback} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import InfoSheet from './InfoSheet';
import {Container, Text} from './styles';

const AddInfoButton: React.FC = () => {
  const [isVisible, setVisible] = useState(false);

  const onClose = useCallback(() => {
    setVisible(false);
  }, []);

  const handleOpen = useCallback(() => {
    setVisible(true);
  }, []);

  return (
    <>
      <Container onPress={handleOpen}>
        <Icon name="add-circle" size={24} color="#228CDB" />
        <Text>Adicionar Informação</Text>
      </Container>

      <InfoSheet isVisible={isVisible} onClose={onClose} />
    </>
  );
};

export default AddInfoButton;
