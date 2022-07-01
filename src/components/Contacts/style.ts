import styled from "styled-components";

export const Container = styled.div`

padding: 2.5rem;

`

export const Box = styled.div`

    display: flex;
    flex-direction: column;
    text-align: center;

`

export const Content = styled.div`

    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;

    a {
        margin: 1rem 2.5rem;
    }

    img {
        width: 2.5rem;
    }

    @media screen and (min-width: 768px) {
     
    img {
        width: 4rem;
    }
}

`