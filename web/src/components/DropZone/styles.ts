import styled, { css } from 'styled-components';

interface Props {
  isHover: boolean;
}

export const Container = styled.div<Props>`
  flex: 1;

  min-height: 10px;
  min-width: 10px;

  ${props =>
    props.isHover &&
    css`
      border: 1px dashed #999;
    `}
`;
