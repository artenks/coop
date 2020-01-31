import {RectButton} from 'react-native-gesture-handler';

import styled from 'styled-components/native';

export const Container = styled(RectButton).attrs({
  rippleColor: '#ccc',
})`
  align-items: center;

  border-radius: 8px;

  margin: 0 16px 8px;
  padding: 8px 16px;
  flex-direction: row;
`;

export const Info = styled.View`
  flex: 1;
  margin-left: 16px;
`;

export const Image = styled.View`
  background: #c4c4c4;
  border-radius: 24px;
  height: 48px;
  width: 48px;
`;

export const Title = styled.Text`
  color: #333;
  font-weight: bold;
  font-size: 14px;
`;

export const Description = styled.Text`
  color: #666;
  font-size: 13px;
`;

export const Hour = styled.Text`
  color: #999;
  font-size: 12px;
`;
