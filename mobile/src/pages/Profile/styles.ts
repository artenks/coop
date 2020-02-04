import styled from 'styled-components/native';

export const Container = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
  keyboardDismissMode: 'on-drag',
  contentContainerStyle: {
    // paddingTop: 32,
  },
})``;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;

  padding: 8px 8px 0;
`;
