import {RectButton} from 'react-native-gesture-handler';

import styled from 'styled-components/native';

export const Container = styled(RectButton)`
  align-self: center;
  flex-direction: row;
  align-items: center;
  background: ${({theme}) => theme.colors.primaryDark};
  border-radius: 24px;
  height: 48px;
  padding: 0 12px;
  margin-bottom: 16px;
`;

export const IconContainer = styled.View`
  margin-right: 16px;
`;

export const Label = styled.Text`
  flex: 1;
  font-size: 16px;
  color: ${({theme}) => theme.colors.captionText};
`;
