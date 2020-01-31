import styled from 'styled-components/native';

export const Container = styled.ScrollView.attrs({
  showsVerticalScrollbar: false,
})`
  background: #f0f0f0;
  flex: 1;
  flex-direction: column;
  padding-top: 48px;
`;
