import React, {useState, useEffect} from 'react';
import {Animated, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {Container} from './styles';

interface Props {
  offset: Animated.Value;
}

const CameraButton: React.FC<Props> = ({offset}) => {
  const styles = StyleSheet.create({
    wrapper: {
      backgroundColor: '#f0f0f0',
      padding: 4,
      position: 'absolute',
      bottom: 0,
      right: 0,
      borderRadius: 24,
    },
  });

  const [scale] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.spring(scale, {
      speed: 50,
      toValue: offset.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 1],
        extrapolate: 'clamp',
      }),
    }).start();
  }, [scale, offset]);

  return (
    <Animated.View
      style={[
        styles.wrapper,
        {
          transform: [
            {
              scaleX: scale.interpolate({
                inputRange: [0, 1],
                outputRange: [1, 0],
                extrapolate: 'clamp',
              }),
            },
            {
              scaleY: scale.interpolate({
                inputRange: [0, 1],
                outputRange: [1, 0],
                extrapolate: 'clamp',
              }),
            },
          ],
        },
      ]}>
      <Container>
        <Icon name="camera-alt" size={20} color="#FFF" />
      </Container>
    </Animated.View>
  );
};

export default CameraButton;
