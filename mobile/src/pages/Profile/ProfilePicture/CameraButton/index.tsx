import React, {useState, useEffect, useCallback} from 'react';
import {Animated, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import ImagePicker from '~/components/ImagePicker';

import {Container} from './styles';

interface Props {
  offset: Animated.Value;
}

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

const CameraButton: React.FC<Props> = ({offset}) => {
  const [scale] = useState(new Animated.Value(0));
  const [isOpenned, setOpenned] = useState(false);

  const handlePickPhoto = useCallback(() => {
    setOpenned(true);
  }, []);

  const handlePickerClosed = useCallback(() => {
    setOpenned(false);
  }, []);

  useEffect(() => {
    Animated.spring(scale, {
      speed: 50,
      toValue: offset.interpolate({
        inputRange: [0, 0.1],
        outputRange: [0, 1],
        extrapolate: 'clamp',
      }),
    }).start();
  }, [offset, scale]);

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
            {perspective: 1000},
          ],
          opacity: scale.interpolate({
            inputRange: [0, 0.9, 1],
            outputRange: [1, 1, 0],
            extrapolate: 'clamp',
          }),
        },
      ]}>
      <Container onPress={handlePickPhoto}>
        <Icon name="camera-alt" size={20} color="#FFF" />
      </Container>

      <ImagePicker isOpenned={isOpenned} onClose={handlePickerClosed} />
    </Animated.View>
  );
};

export default CameraButton;
