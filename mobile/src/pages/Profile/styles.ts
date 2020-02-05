import styled from 'styled-components/native';

export const Container = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
  keyboardDismissMode: 'on-drag',
  contentContainerStyle: {
    paddingTop: 220,
    paddingBottom: 64,
  },
})``;

export const InformationContainer = styled.View`
  padding: 0 16px;
`;

export const Title = styled.Text`
  color: ${({theme}) => theme.colors.captionText};
  margin-bottom: 16px;
`;
