import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {NavigationBottomTabScreenComponent} from 'react-navigation-tabs';

import Background from '~/components/Background';
import FlatIconButton from '~/components/FlatIconButton';

import ProfilePicture from './ProfilePicture';
import {Container, Header} from './styles';

const Profile: NavigationBottomTabScreenComponent = () => {
  return (
    <Background>
      <Container>
        <Header>
          <FlatIconButton icon="share" />
          <ProfilePicture />
          <FlatIconButton icon="settings" />
        </Header>
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
