import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import BottomGradient from '~/components/BottomGradient';
import FloatingActionButton from '~/components/FloatingActionButton';
import SearchBar from '~/components/SearchBar';

import {Container} from './styles';

export default function Friends() {
  return (
    <>
      <Container />

      <SearchBar />

      <BottomGradient />

      <FloatingActionButton icon="group-add" />
    </>
  );
}

Friends.navigationOptions = {
  tabBarLabel: 'Check-ins',
  tabBarIcon: ({tintColor}) => ( /* eslint-disable-line */
    <Icon name="group" color={tintColor} size={24} />
  ),
};
