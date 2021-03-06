import styled, { css} from 'styled-components';

import { shade } from 'polished';

export const Container = styled.button`
  background: #19d3da;
  height: 56px;
  border-radius: 10px;
  border: 0;
  padding: 0 16px;
  color: #312e38;
  width: 100%;
  font-weight: 530;
  margin-top: 16px;
  transition: background-color 0.2s;
  font-size: 20px;
  
  &:hover {
    background: ${shade(0.2, '#19d3da')};
  }

  ${props => props.isChatButton && css`
      border-radius: 0;
      height: 56px;
      width: 20%;
      margin-top: 0;
      padding: 0;
      font-size: 18px !important;
      /* height: 100% !important; */
  `}
`;