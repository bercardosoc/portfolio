import styled from "styled-components";

export const Container = styled.div`

    display: flex;
    flex-direction: column;
    text-align: center;
    font-family: monospace;
    padding: 2.5rem;
    background-color: #F5A9B8;

    h2 {
        margin-bottom: 2.5rem;
    }

/*     @media screen and (min-width: 768px) {
        flex-direction: row;
        flex-wrap: wrap;
    } */

`
export const Wrap = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: center;

@media screen and (min-width: 768px) {
        flex-direction: row;
        flex-wrap: wrap;
    }

`

export const Box = styled.div`

    display: flex;
    flex-direction: column;
`

export const Content = styled.div`

    display: flex;
    flex-direction: row;
    margin: 2rem 3rem;

`