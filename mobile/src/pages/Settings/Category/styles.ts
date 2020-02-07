import {RectButton} from 'react-native-gesture-handler';
import BaseIcon from 'react-native-vector-icons/MaterialIcons';

import styled from 'styled-components/native';

export const Container = styled(RectButton)`
  align-items: center;
  flex-direction: row;

  background: ${({theme}) => theme.colors.primary};
  border-radius: 1px;
`;

export const Icon = styled(BaseIcon).attrs({
  size: 24,
  color: '#666',
})`
  padding: 16px 24px;
`;

export const InfoContainer = styled.View`
  flex: 1;
`;

export const Title = styled.Text`
  color: #666;
  font-size: 16px;
  line-height: 20px;
`;

export const Description = styled.Text`
  margin: 0;
  color: #999;
  font-size: 14px;
  line-height: 18px;
`;
