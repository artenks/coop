import React, {useState, useCallback} from 'react';
import {Animated} from 'react-native';

import {useFocusEffect} from '@react-navigation/native';

import Background from '~/components/Background';
import Header from '~/pages/Settings/Header';

import {Container} from './styles';

const Notifications: React.FC = () => {
  const [opacity] = useState(new Animated.Value(0));
  const [scrollOffset] = useState(new Animated.Value(0));
  const [scrollEvents] = useState([
    {
      nativeEvent: {
        contentOffset: {y: scrollOffset},
      },
    },
  ]);

  useFocusEffect(
    useCallback(() => {
      Animated.timing(opacity, {
        duration: 300,
        toValue: 1,
      }).start();
    }, [opacity]),
  );

  return (
    <Background>
      <Container
        scrollEventThrottle={10}
        onScroll={Animated.event(scrollEvents)}
        style={{
          opacity: opacity,
        }}
      />

      <Header title="Notificações" offset={scrollOffset} />
    </Background>
  );
};

export default Notifications;
