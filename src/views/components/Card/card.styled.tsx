import styled from "styled-components";

export const ContainerCard = styled.div`
    max-width: 250px;
    max-height: 300px;

    min-width: 200px;
    min-height: 250px;

    text-align: center;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    background-color: #212196;

    border-top-right-radius: 30%;
    border-bottom-left-radius: 30%;

    h3 {
        color: #ffff;
        margin-top: -25px;
        margin-left: 10px;
    }
`;

export const ContainerImgCard = styled.div`
    width: 170px;
    height: 170px;

    object-fit: contain;

    img {
        border-top-right-radius: 30%;
        border-bottom-left-radius: 30%;
    
        width: 100%;
        height: 100%;
    }
`;