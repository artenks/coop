import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import FloatingActionButton from '~/components/FloatingActionButton';

import ProfilePicture from './ProfilePicture';
import {Container} from './styles';

export default function Profile() {
  return (
    <>
      <Container>
        <ProfilePicture />
      </Container>

      <FloatingActionButton icon="save" />
    </>
  );
}

Profile.navigationOptions = {
  tabBarLabel: 'Check-ins',
  tabBarIcon: ({tintColor}) => ( /* eslint-disable-line */
    <Icon name="person" color={tintColor} size={24} />
  ),
};
