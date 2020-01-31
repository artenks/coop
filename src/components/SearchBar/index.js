import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {Container, Field} from './styles';

export default function SearchBar() {
  return (
    <Container
      style={{
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 20},
        shadowOpacity: 0.5,
        shadowRadius: 20,
      }}>
      <Icon name="search" color="#666" size={24} />
      <Field placeholder="Pesquisar" />
    </Container>
  );
}
