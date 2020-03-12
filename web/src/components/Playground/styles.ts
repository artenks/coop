import styled from 'styled-components';

export const Container = styled.div`
  display: flex;

  flex: 1;
  padding: 40px 64px;

  & > * + * {
    margin-left: 64px;
  }
`;
