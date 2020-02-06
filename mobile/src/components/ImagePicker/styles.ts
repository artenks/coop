import {RectButton} from 'react-native-gesture-handler';

import styled from 'styled-components/native';

export const Wrapper = styled.View`
  background: #fff;
  padding: 24px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`;

export const Title = styled.Text`
  font-size: 18px;
  color: #666;
  margin-bottom: 16px;
  align-self: center;
`;

export const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const RoundButton = styled(RectButton)`
  align-items: center;
  justify-content: center;

  background: #fff;
  border-radius: 48px;
  height: 96px;
  width: 96px;
`;

export const IconContainer = styled.View`
  align-items: center;
  justify-content: center;

  border-color: #eee;
  border-width: 1px;

  border-radius: 24px;
  height: 48px;
  width: 48px;
`;

export const Label = styled.Text`
  margin-top: 8px;
  color: #999;
`;

export const EmptyContainer = styled.View`
  height: 96px;
  width: 96px;
`;
