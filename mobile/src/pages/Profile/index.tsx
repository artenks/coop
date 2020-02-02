import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {NavigationBottomTabScreenComponent} from 'react-navigation-tabs';

import Background from '~/components/Background';

import ProfilePicture from './ProfilePicture';
import {Container} from './styles';

const Profile: NavigationBottomTabScreenComponent = () => {
  return (
    <Background>
      <Container>
        <ProfilePicture />
      </Container>
    </Background>
  );
};

Profile.navigationOptions = {
  tabBarIcon: ({tintColor}) => (
    <Icon name="person" color={tintColor} size={24} />
  ),
};

export default Profile;
