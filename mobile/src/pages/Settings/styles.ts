import styled from 'styled-components/native';

export const Container = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
  keyboardDismissMode: 'on-drag',
  contentContainerStyle: {
    paddingTop: 56,
    paddingBottom: 16,
  },
})``;
