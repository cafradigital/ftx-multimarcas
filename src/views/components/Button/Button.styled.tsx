import styled from "styled-components";

export const ContainerButton = styled.button`
    min-width: 100px;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;

    outline: none;

    * {
        text-align: center;
    }

    padding: 7px 20px;
    background-color: #7ED957;

    border-radius: 50px;

    cursor: pointer;

    box-shadow: 2px 2px 10px #00000060;
    border: none;
    font-size: 1.2rem;

    transition: all 3s;

    &:hover {
        h3 {
            color: #ffff;
        }
    };
`;

export const ContainerIconeWhatsApp = styled.div`
    width: 35px;
    height: 35px;

    object-fit: contain;

    img {
        width: 100%;
        height: 100%;
    }
`;