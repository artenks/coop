import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import Explore from '~/pages/Explore';
import Friends from '~/pages/Friends';
import Home from '~/pages/Home';
import Notifications from '~/pages/Notifications';
import Profile from '~/pages/Profile';

export default createAppContainer(
  createBottomTabNavigator(
    {
      Home,
      Explore,
      Friends,
      Notifications,
      Profile,
    },
    {
      tabBarOptions: {
        activeTintColor: '#333',
        inactiveTintColor: '#999',
        keyboardHidesTabBar: false,

        showLabel: false,
        style: {
          backgroundColor: '#fff',
          borderRadius: 24,
          borderTopWidth: 0,
          marginBottom: 16,
          marginLeft: 16,
          height: 48,
          paddingHorizontal: 8,
          position: 'absolute',
          width: 264,

          elevation: 2,

          shadowColor: '#000',
          shadowOffset: {width: 0, height: 20},
          shadowOpacity: 0.5,
          shadowRadius: 20,
        },
      },
    },
  ),
);
