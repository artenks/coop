import styled from 'styled-components';

export const Container = styled.div`
  user-select: none;
  display: flex;
  align-items: center;
  padding: 0 16px;
  height: 40px;
  border-radius: 4px;

  color: #333;
  fill: #333;

  flex-wrap: none;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  background: rgba(51, 51, 51, 0.1);

  svg,
  img {
    margin-right: 16px;
  }

  img {
    height: 20px;
    width: 20px;
  }

  :hover {
    background: rgba(219, 68, 55, 0.1);
    color: #db4437;
    fill: #db4437;
  }
`;
