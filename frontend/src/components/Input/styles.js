import styled, { css} from 'styled-components';

export const Container = styled.div`
    border-radius: 10px;
    background: #232129;
    padding: 16px;
    width: 100%;
    border: 2px solid #232129;
    color: #666360;
    display: flex;
    align-items: center;

    & + div {
        margin-top: 8px;
    }

    ${props => props.isErrored && css`
        border-color: #c53030;
    `}

    ${props => props.isFocused && css`
        color: #19d3da;
        border-color: #19d3da;
    `}

    ${props => props.isFilled && css`
        color: #19d3da;
    `}

    input {
        flex: 1;
        background: transparent;
        border: 0;
        color: #f4ede8;
        &::placeholder {
            color: #666360;
        }
    }

    svg {
        margin-right: 16px;
    }
    `;
