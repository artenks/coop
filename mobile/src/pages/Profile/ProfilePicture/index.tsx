import React from 'react';

import CameraButton from './CameraButton';
import {Container, Image} from './styles';

const ProfilePicture: React.FC = () => {
  return (
    <Container>
      <Image />
      <CameraButton />
    </Container>
  );
};

export default ProfilePicture;
