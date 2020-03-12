import Scrollbar from 'react-perfect-scrollbar';

import styled from 'styled-components';

export const Container = styled(Scrollbar)`
  display: flex;
  flex-direction: column;
  flex: 1;

  strong {
    font-size: 12px;
    font-weight: 500;
    margin-bottom: 8px;
  }

  & > * + * {
    margin-top: 8px;
  }
`;
