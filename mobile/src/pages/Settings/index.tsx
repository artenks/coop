import React, {useState, useRef} from 'react';
import {Animated, ScrollView} from 'react-native';

import {useScrollToTop, useNavigation} from '@react-navigation/native';

import Background from '~/components/Background';

import Category from './Category';
import Header from './Header';
import {Container} from './styles';

const Settings: React.FC = () => {
  const navigation = useNavigation();

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
        ref={scrollRef}
        scrollEventThrottle={10}
        onScroll={Animated.event(scrollEvents)}>
        <Category
          icon="brightness-medium"
          title="Aparência"
          onPress={() => navigation.navigate('Appearence')}
          description="Temas, tamanhos e comportamentos"
        />
        <Category
          icon="notifications"
          title="Notificações"
          onPress={() => {}}
        />
      </Container>

      <Header title="Configurações" offset={scrollOffset} />
    </Background>
  );
};

export default Settings;
