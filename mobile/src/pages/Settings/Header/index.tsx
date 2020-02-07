import React from 'react';
import {Animated} from 'react-native';

import BackButton from '~/components/BackButton';

import {Wrapper, Title} from './styles';

const Header: React.FC = () => {
  return (
    <Animated.View>
      <Wrapper>
        <BackButton />
        <Title>Configurações</Title>
      </Wrapper>
    </Animated.View>
  );
};

export default Header;
