import styled from 'styled-components';

export const Container = styled.div`
    border-radius: 10px;
    background: whitesmoke;
    border: 2px solid #232129;
    color: #666360;
    width: 100vw;
    
    form {
        display: flex;
        width: 100%;
        flex-wrap: wrap;
        height: 10%;
        align-items: flex-end;
        
        button {
            height: 100%;
            margin: 0;
            padding: 0;
        }
    }
`;

export const ChatMessagesContainer = styled.div `
    padding: 16px;
    align-items: flex-start;
    justify-content: flex-start;
    height: 90%;
    max-width: 100vw;
` 

export const Message = styled.p `
    font-size: 16;
    max-width: 100vw;

`



