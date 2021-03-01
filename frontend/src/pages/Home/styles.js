import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  height: 100vh;
  max-height: 100vh;
  display: flex;
  align-items: stretch;
  justify-content: center;

  a {
      color: #19d3da;
      text-decoration: none;
      transition: color 0.2s;
      font-size: 18px;

      display: flex;
      align-items: center;
      margin-top: -2rem;
      svg {
          margin-right: 16px;
      }

      &:hover {
          color: ${shade(0.2, '#19d3da')};
      }
    }
    
  @media(max-width: 870px) {
    margin-top:  ${props => props.isAuthenticated ? '0' : '10rem'};
    flex-direction: ${props => props.isAuthenticated ? 'row' : 'column'} ;
    
    h1 {
      margin-top: -4rem;
    }
     a {
       margin-bottom:2rem;
     }
  }

  

`;
export const LogoutContainer = styled.div`
  height: 100px;
  width: 100px;
  position: absolute;
  left: 0;
  margin-top: 6vh;
  margin-left: 3%;
`
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;  

  height: 100%;
  width: 100%;
  max-width: 40%;

  @media(max-width: 870px) {
    max-width: 100%;
  }
`;

export const ChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  max-height: 100vh;
  height: 100%;
  width: 100%;
  background-color: black;
`;

const appearFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`

export const AnimationContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    animation: ${appearFromLeft} 1s;

    form {
        margin: 80px 0;
        width: 340px;
        text-align: center;
        align-items: center;

        h1 {
            margin-bottom: 24px;
        }
    }  
`