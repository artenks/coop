import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {NavigationBottomTabScreenComponent} from 'react-navigation-tabs';

import Background from '~/components/Background';

import {Container} from './styles';

const Explore: NavigationBottomTabScreenComponent = () => {
  return (
    <Background>
      <Container />
    </Background>
  );
};

Explore.navigationOptions = {
  tabBarIcon: ({tintColor}) => (
    <Icon name="explore" color={tintColor} size={24} />
  ),
};

export default Explore;
