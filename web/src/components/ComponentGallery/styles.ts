import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  strong {
    font-size: 12px;
    font-weight: 500;
    margin-bottom: 8px;
  }

  & > * + * {
    flex: 1;
  }
`;
