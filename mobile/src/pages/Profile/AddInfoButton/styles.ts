import {RectButton} from 'react-native-gesture-handler';

import styled from 'styled-components/native';

export const Container = styled(RectButton)`
  align-items: center;
  flex-direction: row;

  border-radius: 24px;
  background: ${({theme}) => theme.colors.primary};
  height: 48px;
  margin-bottom: 16px;
  padding: 0 12px;
`;

export const Text = styled.Text`
  text-transform: uppercase;
  color: #228cdb;
  margin-left: 16px;
  font-weight: bold;
`;
