import React, {useState, useEffect, useContext} from 'react';
import {Animated, StyleSheet} from 'react-native';

import {ThemeContext} from 'styled-components';

import BackButton from '~/components/BackButton';

import {Wrapper, Title} from './styles';

interface Props {
  title: string;
  offset: Animated.Value;
}

const Header: React.FC<Props> = ({offset, title}) => {
  const {colors} = useContext(ThemeContext);

  const styles = StyleSheet.create({
    header: {
      backgroundColor: colors.primary,
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
        <Title>{title}</Title>
      </Wrapper>
    </Animated.View>
  );
};

export default Header;
