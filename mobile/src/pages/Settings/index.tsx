import React, {useState, useRef} from 'react';
import {Animated, ScrollView, Text} from 'react-native';

import {useScrollToTop} from '@react-navigation/native';

import Background from '~/components/Background';

import Header from './Header';
import {Container} from './styles';

const Settings: React.FC = () => {
  const scrollRef = useRef<ScrollView>(null);
  const [scrollOffset] = useState(new Animated.Value(0));
  const [scrollEvents] = useState([
    {
      nativeEvent: {
        contentOffset: {y: scrollOffset},
      },
    },
  ]);

  useScrollToTop(scrollRef);

  return (
    <Background>
      <Container
        scrollEventThrottle={10}
        ref={scrollRef}
        onScroll={Animated.event(scrollEvents)}>
        <Text style={{height: 1000}}>Opa</Text>
      </Container>

      <Header offset={scrollOffset} />
    </Background>
  );
};

export default Settings;
