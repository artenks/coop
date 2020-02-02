import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {Container, Wrapper} from './styles';

const CameraButton: React.FC = () => {
  return (
    <Wrapper>
      <Container>
        <Icon name="camera-alt" size={20} color="#FFF" />
      </Container>
    </Wrapper>
  );
};

export default CameraButton;
