import {RectButton} from 'react-native-gesture-handler';

import styled from 'styled-components/native';

export const Container = styled(RectButton).attrs({
  rippleColor: '#FFF',
})`
  padding: 8px;
  border-radius: 18px;

  background: #333;
`;
