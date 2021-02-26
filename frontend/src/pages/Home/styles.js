import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  /* align-items: center; */

  /* flex-direction: column; -> on media query */

  /* justify-content: center; */
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  /* width: 70%; */
  /* height: 70%; */
  width: 100%;
  max-width: 30%;
  /* background-color: #686d76; */

    h1 {
        color: #f4ede8;
        margin-bottom: 1rem;
    }
`;
