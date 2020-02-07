import React, {useState, useEffect} from 'react';
import {Animated, StyleSheet} from 'react-native';

import BackButton from '~/components/BackButton';

import {Wrapper, Title} from './styles';

interface Props {
  offset: Animated.Value;
}

const Header: React.FC<Props> = ({offset}) => {
  const styles = StyleSheet.create({
    header: {
      backgroundColor: '#f0f0f0',
      flexDirection: 'row',
      justifyContent: 'space-between',
      position: 'absolute',
      left: 0,
      right: 0,
      padding: 4,
    },
  });

  const [elevation] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.spring(elevation, {
      speed: 50,
      toValue: offset.interpolate({
        inputRange: [0, 0.1],
        outputRange: [0, 16],
        extrapolate: 'clamp',
      }),
    }).start();
  }, [elevation, offset]);

  return (
    <Animated.View style={[styles.header, {elevation}]}>
      <Wrapper>
        <BackButton />
        <Title>Configurações</Title>
      </Wrapper>
    </Animated.View>
  );
};

export default Header;
