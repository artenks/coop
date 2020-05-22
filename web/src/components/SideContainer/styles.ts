import Scrollbar from 'react-perfect-scrollbar';

import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  background: #fff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  width: 300px;
`;

export const Container = styled(Scrollbar)`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.strong`
  border-bottom: 1px solid #eee;
  color: #333;
  font-size: 12px;
  padding: 16px 24px;
`;
