import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-family: monospace;
    font-size: 1rem;
    margin: auto 1rem;

    img {
        width: 2.5rem;
        margin-bottom: 0.5rem;
    }

    @media screen and (min-width: 768px) {
     
    img {
        width: 5rem;
    }
    }
`