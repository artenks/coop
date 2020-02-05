import styled from 'styled-components/native';

export const Container = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
  keyboardDismissMode: 'on-drag',
  contentContainerStyle: {
    paddingBottom: 64,
  },
})``;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;

  padding: 8px 8px 32px;
`;

export const InformationContainer = styled.View`
  padding: 0 16px;
`;

export const Title = styled.Text`
  color: ${({theme}) => theme.colors.captionText};
  margin-bottom: 16px;
`;
