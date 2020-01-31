import {RectButton} from 'react-native-gesture-handler';

import styled from 'styled-components/native';

export const Container = styled(RectButton).attrs({
  rippleColor: '#fff',
})`
  align-items: center;
  justify-content: center;

  border-radius: 24px;
  bottom: 16px;
  background: #333;
  height: 48px;
  position: absolute;
  right: 16px;
  width: 48px;
`;
