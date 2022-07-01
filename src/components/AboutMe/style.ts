import styled from "styled-components";

export const Container = styled.div`

display: flex;
flex-direction: column;
background-color: #5BCEFA;
font-family: monospace;
align-items: center;
padding: 2.5rem;

h2 {
    text-align: center;
}

`

export const Content = styled.div`

    display: flex;
    flex-direction: row;
    align-items: center;

    img {
        border-radius: 100%;
        width: 15rem;
    }

    @media screen and (min-width: 768px) {
        width: 50%;
    }
`

export const Text = styled.div`
    margin: auto 1rem;
    text-indent: 5%;
`