import {RectButton} from 'react-native-gesture-handler';

import styled from 'styled-components/native';

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 16px;
`;

export const Title = styled.Text`
  font-size: 16px;
`;

export const Wrapper = styled.View`
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  background: #fff;
  padding: 16px;
`;

export const Content = styled.View`
  align-items: center;
  flex-direction: row;
`;

export const Field = styled.TextInput.attrs({
  selectTextOnFocus: true,
})`
  background: rgba(0, 0, 0, 0.05);
  border-radius: 24px;
  height: 48px;
  padding: 0 16px;
  font-size: 14px;
  flex: 1;
`;

export const RoundButton = styled(RectButton).attrs({
  rippleColor: '#fff',
})`
  align-items: center;
  justify-content: center;

  background: ${({theme}) => theme.colors.secondary};
  border-radius: 24px;
  margin-left: 16px;
  height: 48px;
  width: 48px;
`;
