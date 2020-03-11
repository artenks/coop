import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;

  margin: 0 auto;
  height: 100%;
  width: 100%;
  max-width: 980px;
  padding: 48px;

  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.25);

  & > * + * {
    margin-left: 32px;
    flex: 1;
  }
`;
