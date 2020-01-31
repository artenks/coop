import styled from 'styled-components/native';

import FloatingActionButton from '~/components/FloatingActionButton';

export const Container = styled.View`
  position: absolute;

  align-items: center;
  justify-content: center;

  background: #f0f0f0;
  border-radius: 24px;
  bottom: 0px;
  height: 48px;
  right: 0px;
  width: 48px;
`;

export const Icon = styled(FloatingActionButton).attrs({
  icon: 'camera-alt',
})`
  background: #666;
  bottom: 4px;
  right: 4px;
  height: 40px;
  width: 40px;
`;
