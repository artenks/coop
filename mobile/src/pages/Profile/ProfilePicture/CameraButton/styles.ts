import {RectButton} from 'react-native-gesture-handler';

import styled from 'styled-components/native';

export const Wrapper = styled.View`
  background: #f0f0f0;
  padding: 4px;
  position: absolute;
  bottom: 0;
  right: 0;
  border-radius: 24px;
`;

export const Container = styled(RectButton).attrs({
  rippleColor: '#FFF',
})`
  padding: 8px;
  border-radius: 18px;

  background: #333;
`;
