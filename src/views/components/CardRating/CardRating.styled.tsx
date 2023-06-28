import styled from "styled-components";

export const ContainerCardRating = styled.div`
    text-align: center;
    max-width: 220px;
    min-width: 180px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    h3 {
        color: #F28A2E;
        padding: 10px;
        font-size: 1.8rem;
    }

    p {
        color: #ffff;
        font-size: 1.25rem;
    }
`;

export const ContainerImgCardRating = styled.div`
    width: 125px;
    height: 125px;

    object-fit: contain;

    img {
        border-radius: 20px;
        width: 100%;
        height: 100%;
    }
`;

export const ContainerStars = styled.div`

    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    padding: 5px;

    gap: 10px;
`;

export const ContainerImg = styled.div`

    width: 20px;
    height: 20px;

    * {
        width: 100%;
        height: 100%;
    }
`;