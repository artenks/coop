import styled from 'styled-components/native';

export const Container = styled.View`
  background: ${({theme}) => theme.colors.primary};
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  padding-top: 8px;
  max-height: 500px;
`;
