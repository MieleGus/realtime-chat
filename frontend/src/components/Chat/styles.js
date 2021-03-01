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
    word-wrap:break-word;

    /* ${props => props.loading && css`
        align-items: center !important;
        justify-content: center !important;
    `} */
    overflow-y: auto;
    
` 

export const Message = styled.p `
    font-size: 16;
    max-width: 100vw;
    color: black;
    &:not(:last-child) {
            margin-bottom: 0.2rem;
    }

    span {
        font-size: 17px;
        max-width: 100vw;
        color: #282a36;
        white-space:nowrap;
        margin-right: 0.2rem;

        
    }

    ${props => props.isAuthor && css`
        span {
            color: #14a8ae !important;
        }
    `}
`


