import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
  /* align-items: center; */

  @media(max-width: 870px) {
    flex-direction: column;
  }
  /* flex-direction: column; -> on media query 870x722px*/

  /* justify-content: center; */
`;

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
  /* background-color: black; */
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
`