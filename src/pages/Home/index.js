import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import FloatingActionButton from '~/components/FloatingActionButton';

import {Container} from './styles';

export default function Home() {
  return (
    <>
      <Container />
      <FloatingActionButton icon="add" />
    </>
  );
}

Home.navigationOptions = {
  tabBarLabel: 'Check-ins',
  tabBarIcon: ({tintColor}) => ( /* eslint-disable-line */
    <Icon name="home" color={tintColor} size={24} />
  ),
};
