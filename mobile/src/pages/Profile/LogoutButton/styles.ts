import {RectButton} from 'react-native-gesture-handler';

import styled from 'styled-components/native';

export const Container = styled(RectButton)`
  align-items: center;
  justify-content: center;

  background: ${({theme}) => theme.colors.primary};
  border-radius: 24px;

  height: 48px;
  margin: 0 16px 16px;
`;

export const Text = styled.Text`
  font-size: 14px;
  font-weight: bold;
  text-transform: uppercase;

  color: #ee6352;
`;
