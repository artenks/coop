import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.div`
  position: relative;
`;

export const DropZoneContainer = styled.div`
  position: absolute;

  bottom: 49px;
  left: 39px;
  right: 38px;
  top: 49px;

  display: flex;
  flex-direction: column;
`;
