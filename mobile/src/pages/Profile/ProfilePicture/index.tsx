import React from 'react';
import {Animated, StyleSheet, TouchableWithoutFeedback} from 'react-native';

import CameraButton from './CameraButton';
import {Container} from './styles';

interface Props {
  offset: Animated.Value;
  onPress?(): void;
}

const ProfilePicture: React.FC<Props> = ({offset, onPress}) => {
  const styles = StyleSheet.create({
    image: {
      backgroundColor: '#ddd',
      borderRadius: 75,
    },
  });

  return (
    <Container>
      <TouchableWithoutFeedback onPress={onPress}>
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
      </TouchableWithoutFeedback>
      <CameraButton offset={offset} />
    </Container>
  );
};

export default ProfilePicture;
