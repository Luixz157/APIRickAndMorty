import styled from "styled-components";

export const ContainerApp = styled.div`
    width: 100%;
    max-width: 124.6rem;
    margin: 0 auto;
    padding: 4rem 1.5rem;
`;

export const HeaderApp = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 1.6rem;
    margin-bottom: 1.6rem;
    border-bottom: 1px solid  rgba(255,255,255,0.3);
    h1 {
        font-size: 3.2rem;
    }
    span {
        font-size: 1.6rem;
        opacity: 0.6rem;
    }
`

export const ContentCharacters = styled.div`
    & > div {
        display: grid;
        grid-template-columns: repeat(4, 1fr); //Ou poderia coloca 1fr repetido 4vezes que seria 25% para cada um
        grid-gap: 1.6rem;
    }
    button {
        display: block;
        line-height: 6.5rem;
        background-color: #5b1fa6;
        border-radius: 6px;
        width: 30rem;
        margin: 0 auto;
        cursor: pointer;
        border: none;
        font-size: 1.8rem;
        margin-top: 4.8rem;
        transition: filter .3s ease;
        &:hover {
            filter: brightness(0.8);
        }
    }
`

export const PesquisarInput = styled.div`
    input {
        width: 100%;
        max-width: 200px;
        padding: 10px;
        border-radius: 25px;
        background-color: transparent;
        border: 2px solid white;
        color: white;
    }
`
