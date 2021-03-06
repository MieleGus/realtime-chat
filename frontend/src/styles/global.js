import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;

    }
    body {
        background: #312E38;
        /* background: #2f3136;  */
        max-height: 100vh;
        color: #FFF;
        -webkit-font-smoothing: antialiased;
    }
    body, input, button {
        font-family: 'Roboto Slab', serif;
        font-size: 16px;
    }

    h1 {
        font-weight: 530;
    }   

    button {
        cursor: pointer;
    }
`;