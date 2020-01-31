import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import FloatingActionButton from '~/components/FloatingActionButton';

import {Container} from './styles';

export default function Notifications() {
  return (
    <>
      <Container />
      <FloatingActionButton icon="check" />
    </>
  );
}

Notifications.navigationOptions = {
  tabBarLabel: 'Check-ins',
  tabBarIcon: ({tintColor}) => ( /* eslint-disable-line */
    <Icon name="notifications" color={tintColor} size={24} />
  ),
};
