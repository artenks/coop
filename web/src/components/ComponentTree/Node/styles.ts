import styled from 'styled-components';

export const Container = styled.div`
  color: #666;
  font-size: 12px;
  padding: 16px 24px;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  :hover {
    background: rgba(51, 51, 51, 0.1);
  }
`;
