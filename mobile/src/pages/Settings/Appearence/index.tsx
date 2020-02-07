import React, {useState, useCallback} from 'react';
import {Animated, Text, View} from 'react-native';

import {useFocusEffect} from '@react-navigation/native';

import Header from '~/pages/Settings/Header';

const Appearence: React.FC = () => {
  const [scrollOffset] = useState(new Animated.Value(0));

  useFocusEffect(
    useCallback(() => {
      console.log('focused');

      return () => console.log('unfocused');
    }, []),
  );

  return (
    <View>
      <Text style={{marginTop: 64}}>Appearence</Text>
      <Header title="Aparência" offset={scrollOffset} />
    </View>
  );
};

export default Appearence;
