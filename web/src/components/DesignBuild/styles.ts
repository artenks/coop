import DropZone from 'components/DropZone';
import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  align-self: center;
`;

export const DropZoneContainer = styled.div`
  position: absolute;
  background: transparent;

  bottom: 15px;
  left: 15px;
  right: 15px;
  top: 40px;

  display: flex;
  flex-direction: column;
`;

export const MainDropZone = styled(DropZone)`
  border-radius: 0px 0px 34px 34px;
`;
