import {RectButton} from 'react-native-gesture-handler';

import styled from 'styled-components/native';

export const Wrapper = styled.View`
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  padding: 24px 16px;
`;

export const Content = styled.View`
  align-items: center;
  flex-direction: row;
`;

export const Field = styled.TextInput.attrs({
  selectTextOnFocus: true,
  selectionColor: 'rgba(0, 0, 0, 0.15)',
})`
  background: rgba(0, 0, 0, 0.05);
  border-radius: 24px;
  height: 48px;
  padding: 0 16px;
  font-size: 14px;
  flex: 1;
  color: #666;
`;

export const RoundButton = styled(RectButton).attrs({
  rippleColor: '#fff',
})`
  align-items: center;
  justify-content: center;

  align-self: center;

  background: ${({theme}) => theme.colors.secondary};
  border-radius: 24px;
  margin-left: 16px;
  height: 48px;
  width: 48px;
`;
