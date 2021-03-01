import styled, { css } from 'styled-components';

export const Container = styled.div`
    border-radius: 10px;
    background: whitesmoke;
    border: 2px solid #232129;
    color: #666360;
    width: 50vw;
    height: 70%;
    align-items: flex-end;
    align-self: center;

    @media(max-width: 870px) {
        width: 80vw;
    }

    form {
        display: flex;
        max-height: 120px;
        height: 120px;
        flex-wrap: wrap;
        height: 10%;
        align-items: flex-end;

        @media(max-width: 870px) {
            
        }
        /* button {
            height: 100%;
            margin: 0;
            padding: 0;
        } */
    }

    /* ${props => props.isAuthenticated && css`
      width: 70%;
      flex: 1;
      justify-content: center;
    `} */
`;

export const ChatMessagesContainer = styled.div `
    padding: 16px;
    align-items: flex-start;
    justify-content: flex-start;
    height: 100%;
    max-height: 480px;
    max-width: 100vw;
    overflow:auto;
    overflow-y: auto;
    
` 

export const Message = styled.p `
    font-size: 16;
    max-width: 100vw;

`


