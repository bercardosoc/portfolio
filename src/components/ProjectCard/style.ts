import styled from "styled-components";

export const Container = styled.div`

display: flex;
flex-direction: column;
margin: 1rem;
padding: 1rem;

background: rgba( 252, 252, 252, 0.25 );
box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
backdrop-filter: blur( 4px );
-webkit-backdrop-filter: blur( 4px );
border-radius: 10px;
border: 1px solid rgba( 255, 255, 255, 0.18 );

h4 {
    margin: 1rem;
}

@media screen and (min-width: 768px) {
    width: 300px;
}

`

export const Box = styled.div`

    display: flex;
    flex-direction: row;
    margin: 1.5rem auto;
    
    img {
        cursor: pointer;
        width: 2rem;
        margin: auto 1rem;
    }

`