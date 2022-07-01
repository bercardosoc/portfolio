import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
}

body {
    font-family: monospace;
}

h1 {
    font-size: 3rem;
    font-weight: bolder;

    @media screen and (max-width: 768px) {
        font-size: 2.5rem;
    }

    @media screen and (max-width: 360px) {
        font-size: 2rem;
    }
}

h2 {
    font-size: 2rem;
    margin-bottom: 2.5rem;
}

h3 {
    font-size: 1rem;
}

h4 {
    font-size: 1rem;
}

h2, h3, h4, span {
    text-align: center;
}

p {
    text-indent: 5%;
    font-size: 1rem;
}

button{
    cursor: pointer;
}

`