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

h2, h3, h4 {
    text-align: center;
}

p {
    text-indent: 5%;
}

button{
    cursor: pointer;
}

`