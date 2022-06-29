import { createGlobalStyle } from "styled-components";
import Varsity from "../fonts/varsity_regular.ttf";

export default createGlobalStyle`

@font-face {
    font-family: "Varsity";
    src: local("Varsity"), url(Varsity), format("truetype");

    *{
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    button{
        cursor: pointer;
    }

`