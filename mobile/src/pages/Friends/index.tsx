import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {NavigationBottomTabScreenComponent} from 'react-navigation-tabs';

import Background from '~/components/Background';

import {Container} from './styles';

const Friends: NavigationBottomTabScreenComponent = () => {
  return (
    <Background>
      <Container />
    </Background>
  );
};

Friends.navigationOptions = {
  tabBarIcon: ({tintColor}) => (
    <Icon name="group" color={tintColor} size={24} />
  ),
};

export default Friends;
