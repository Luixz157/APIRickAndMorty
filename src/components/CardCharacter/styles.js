import styled from "styled-components";

export const ContainerCard = styled.div`
    width: 100%;
    background-color: #151020;
    border-radius: 4px;
    padding: 2rem;
    .image {
        width: 100%;
        height: 24.3rem;
        overflow: hidden;
        border-radius:4px ;
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
    .info {
        margin-top: 1.6rem;
        h3 {
            font-size: 1.8rem;
            margin-bottom: 8px;
        }
        ul {
            list-style: none;
            display: grid;
            grid-column: auto;
            li {
                display: block;
                font-size: 1.4rem;
                color: white;
                &:last-child {
                    &::before {
                        content: "";
                        width: 4px;
                        height: 4px;
                        background-color: #fff;
                        opacity: 0.4;
                        display: inline-block;
                        border-radius: 50%;
                        margin: 0 8px;
                        vertical-align: middle;
                    }
                }
            }
        }
    }
`