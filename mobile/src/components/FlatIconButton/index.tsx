import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {Container} from './styles';

interface Props {
  icon: string;
  onPress?(): void;
}

const FlatIconButton: React.FC<Props> = ({icon, onPress}) => {
  return (
    <Container onPress={onPress}>
      <Icon name={icon} size={24} color="#666" />
    </Container>
  );
};

export default FlatIconButton;
