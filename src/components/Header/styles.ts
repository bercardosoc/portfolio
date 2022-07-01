import styled from "styled-components";

export const Container = styled.div`

display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
font-family: monospace;
padding: 1rem;
width: 100vw;

img {
    width: 3rem;
    height: 3rem;
    cursor: pointer;
}

`

export const Title = styled.div`

    display: flex;
    flex-direction: column;

`

export const Content = styled.div`

display: flex;

a {
    text-decoration: none;
    color: black;
    margin: auto 1rem;
}

button {
    display: none;
}

@media screen and (max-width: 768px) {
    width: 2.5rem;
    flex-direction: column;
    border-radius: 10px;
    border: 1px solid rgba( 255, 255, 255, 0.18 );
    padding: 0.5rem;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;

    a {
        font-size: 1rem;
        margin: 0.5rem 1rem;
    }

    button {
        border: none;
        display: block;
        width: 20%;
    }
}

`