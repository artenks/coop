import styled from 'styled-components';

interface Props {
  isHover: boolean;
}

export const Container = styled.div<Props>`
  flex: 1;
  background: ${props => (props.isHover ? '#ddd' : 'none')};
`;
