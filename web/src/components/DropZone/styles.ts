import styled, { css } from 'styled-components';

interface Props {
  isHover: boolean;
}

export const Container = styled.div<Props>`
  flex: 1;
  ${props =>
    props.isHover &&
    css`
      border: 1px dashed #999;
    `}
`;
