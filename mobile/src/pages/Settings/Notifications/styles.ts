import {Animated} from 'react-native';

import styled from 'styled-components/native';

export const Container = styled(Animated.ScrollView).attrs({
  showsVerticalScrollIndicator: false,
  keyboardDismissMode: 'on-drag',
  contentContainerStyle: {
    paddingTop: 56,
    paddingBottom: 16,
  },
})``;
