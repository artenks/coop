import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import BottomBar from '~/components/BottomBar';
import Explore from '~/pages/Explore';
import Friends from '~/pages/Friends';
import Home from '~/pages/Home';
import Notifications from '~/pages/Notifications';
import Profile from '~/pages/Profile';
import Settings from '~/pages/Settings';
import {Colors} from '~/themes/colors';

export default (colors: Colors) =>
  createAppContainer(
    createStackNavigator(
      {
        Tabs: createBottomTabNavigator(
          {
            Home,
            Explore,
            Friends,
            Notifications,
            Profile,
          },
          {
            tabBarComponent: props => <BottomBar colors={colors} {...props} />,
          },
        ),
        Settings,
      },
      {
        headerMode: 'none',
        navigationOptions: {
          headerVisible: false,
        },
      },
    ),
  );
