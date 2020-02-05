import React from 'react';
import {Animated, StyleSheet} from 'react-native';

// import CameraButton from './CameraButton';
import {Container} from './styles';

interface Props {
  offset: Animated.Value;
}

const ProfilePicture: React.FC<Props> = ({offset}) => {
  const styles = StyleSheet.create({
    image: {
      backgroundColor: '#ddd',
      borderRadius: 75,
    },
  });

  return (
    <Container>
      <Animated.Image
        style={[
          styles.image,
          {
            marginTop: offset.interpolate({
              inputRange: [0, 150],
              outputRange: [24, 0],
              extrapolate: 'clamp',
            }),
            height: offset.interpolate({
              inputRange: [0, 150],
              outputRange: [150, 40],
              extrapolate: 'clamp',
            }),
            width: offset.interpolate({
              inputRange: [0, 150],
              outputRange: [150, 40],
              extrapolate: 'clamp',
            }),
          },
        ]}
        source={{uri: 'https://i.imgur.com/wRrbHCy.jpg'}}
      />
      {/* <CameraButton /> */}
    </Container>
  );
};

export default ProfilePicture;
