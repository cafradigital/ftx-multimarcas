import styled from "styled-components";

export const ContainerCardRating = styled.div`
    text-align: center;
    max-width: 180px;
    min-width: 150px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    h3 {
        color: #212196;
        padding: 10px;
        font-size: 1.7rem;
    }

    p {
        color: black;
        font-size: 1.2rem;
    }
`;

export const ContainerImgCardRating = styled.div`
    width: 150px;
    height: 150px;

    object-fit: contain;

    img {
        border-radius: 20px;
        width: 100%;
        height: 100%;
    }
`;