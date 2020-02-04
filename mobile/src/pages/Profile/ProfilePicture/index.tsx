import React from 'react';

import CameraButton from './CameraButton';
import {Container, Image} from './styles';

const ProfilePicture: React.FC = () => {
  return (
    <Container>
      <Image
        source={{uri: 'https://api.adorable.io/avatars/285/abott@adorable.png'}}
      />
      <CameraButton />
    </Container>
  );
};

export default ProfilePicture;
