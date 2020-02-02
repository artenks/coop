import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {NavigationBottomTabScreenComponent} from 'react-navigation-tabs';

import Background from '~/components/Background';

import {Container} from './styles';

const Home: NavigationBottomTabScreenComponent = () => {
  return (
    <Background>
      <Container />
    </Background>
  );
};

Home.navigationOptions = {
  tabBarIcon: ({tintColor}) => <Icon name="home" color={tintColor} size={24} />,
};

export default Home;
