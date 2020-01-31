import styled from 'styled-components/native';

export const Container = styled.View`
  position: absolute;

  flex-direction: row;

  align-items: center;
  padding-left: 16px;

  background: #fff;
  border-radius: 24px;
  margin: 4px 16px;
  height: 48px;

  top: 12px;
  left: 0px;
  right: 0px;
`;

export const Field = styled.TextInput.attrs({
  returnKeyType: 'search',
})`
  flex: 1;

  color: #666;
  font-size: 18px;
  margin-left: 8px;
`;
