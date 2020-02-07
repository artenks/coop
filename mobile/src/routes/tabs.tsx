import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import BottomBar from '~/components/BottomBar';
import Explore from '~/pages/Explore';
import Friends from '~/pages/Friends';
import Home from '~/pages/Home';
import Notifications from '~/pages/Notifications';
import Profile from '~/pages/Profile';

const Tab = createBottomTabNavigator();

const Tabs: React.FC = () => {
  return (
    <Tab.Navigator tabBar={props => <BottomBar {...props} />}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({color}) => <Icon name="home" color={color} size={24} />,
        }}
      />
      <Tab.Screen
        name="Explore"
        component={Explore}
        options={{
          tabBarIcon: ({color}) => (
            <Icon name="explore" color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="Friends"
        component={Friends}
        options={{
          tabBarIcon: ({color}) => (
            <Icon name="group" color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={Notifications}
        options={{
          tabBarIcon: ({color}) => (
            <Icon name="notifications" color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({color}) => (
            <Icon name="person" color={color} size={24} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
