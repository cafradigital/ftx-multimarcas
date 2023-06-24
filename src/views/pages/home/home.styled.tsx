import styled from "styled-components";
import ImgBackgroundOneSection from '../../assets/img/ImgBackgroundOneSection.svg';

export const Header = styled.header`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    z-index: 9999;
    position: fixed;
`;

export const ContainerIconeHeader = styled.div`
    width: 11.5rem;
    height: 11.5rem;
    
    object-fit: contain;

    padding: 1.5rem;

    img {
        cursor: pointer;
        width: 100%;
        height: 100%;
    }
`;

export const PrimarySection = styled.section`
    width: 100%;
    height: 85vh;

    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;

    text-align: center;

    background-image: url(${ImgBackgroundOneSection});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    padding: 0px 15px;
    gap: 20px;
    
    color: #fff;
    text-shadow: 1px 1px 10px black;

    h1 {
        font-size: 3rem;
    }

    p {
        font-size: 2rem;
        letter-spacing: 6px;
    }

    @media (max-width: 992px) {
        h1 {
            font-size: 2.5rem;
            font-weight: bold;
        }

        p {
            font-size: 1.5rem;
            font-weight: bold;
        }
    };

    @media (max-width: 520px) {
        h1 {
            font-size: 2rem;
            font-weight: bold;
        }

        p {
            font-size: 1rem;
        }
    };

`;

export const WitheSection = styled.section`
    width: 100%;

    padding: 15px;

    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    gap: 50px;
`;

export const ContainerHeaderWhiteSection = styled.div`
    width: 100%;
    
    text-align: center;
    
    * {
        margin: 15px 0px;
    };

    h1 {
        font-size: 3rem;
        font-weight: bold;
        color: #212196;
        text-shadow: .5px .5px 5px #00000080;
    }

    p {
        font-size: 1.8rem;
        color: #010A26;
    }

    @media (max-width: 992px) {
        h1 {
            font-size: 2.7rem;
            font-weight: bold;
        }

        p {
            font-size: 1.5rem;
        }
    };

    @media (max-width: 520px) {
        h1 {
            font-size: 2.4rem;
            font-weight: bold;
        }

        p {
            font-size: 1.3rem;
        }
    };
  
`;

export const ContainerHeaderBlueSection = styled.div`
    width: 100%;
    
    text-align: center;
    
    * {
        margin: 15px 0px;
    };

    h1 {
        font-size: 3rem;
        font-weight: bold;
        color: #F28A2E;
        text-shadow: .5px .5px 5px #00000080;
    }

    p {
        font-size: 1.8rem;
        color: #ffff;
    }

    @media (max-width: 992px) {
        h1 {
            font-size: 2.7rem;
            font-weight: bold;
        }

        p {
            font-size: 1.5rem;
        }
    };

    @media (max-width: 520px) {
        h1 {
            font-size: 2.4rem;
            font-weight: bold;
        }

        p {
            font-size: 1.3rem;
        }
    };
  
`;

export const ContainerCard = styled.div`
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;

    gap: 30px;
`;

export const ContainerButton = styled.div`
    width: 100%;
    
    padding: 20px;

    display: flex;
    align-items: center;
    justify-content: center;
`;

export const BlueSection = styled.section`
    width: 100%;

    padding: 25px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    gap: 30px;

    background-color: #212196;

    h1 {
        font-size: 3rem;
        text-align: center;
        font-weight: bold;
        color: #F28A2E;
        text-shadow: .5px .5px 5px #00000080;
    }

    @media (max-width: 992px) {
        h1 {
            font-size: 2.7rem;
            font-weight: bold;
        }
    };

    @media (max-width: 520px) {
        h1 {
            font-size: 2.4rem;
            font-weight: bold;
        };
    };
`;

export const ContainerList = styled.ul`
    li {
        color: #ffff;
        padding: 5px 0px;
        font-size: 1.3rem;
    }
`;

export const ContainerFooterThirdSection = styled.div`
    width: 100%;
    
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-around;
    gap: 20px;

`;

export const ContainerLocation = styled.div`
    width: 230px;
    height: 300px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    gap: 35px;

`;

export const ContainerImgLocation = styled.div`
    width: 100%;
    height: 200px;

    object-fit: contain;
    
    border-radius: 20px;
    border: solid 2px #F28A2E;

    img {
        border-radius: 20px;
        width: 100%;
        height: 100%;
    };
`;

export const ContainerDropDownHome = styled.div`
    width: 90%;
    max-width: 700px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    gap: 30px;
    
`;

export const Footer = styled.footer`
    width: 100%;

    padding: 20px;
    
    gap: 40px;

    display: flex;
    flex-direction: column;
    align-items: center;

    background-color: #212196;
`;

export const CopyRydem = styled.p`
    color: #ffff;
    font-size: 1.1rem;
    font-style: italic;

    margin-top: 10px;

    width: 100%;
    text-align: center;
`;

export const ContainerHeaderFooter = styled.div`
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: space-around;

    flex-wrap: wrap;

    gap: 40px;
`;

export const ContainerSectionCafra = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
`;

export const ContainerImgCafra = styled.div`
    width: 200px;
    height: 200px;

    object-fit: contain;

    img {
        width: 100%;
        height: 100%;
    }
`;

export const ContainerRedesSociaisCafra = styled.div`
    color: #ffff;
    font-size: 1.3rem;

    p {
        padding: 10px;
    }

    a {
        color: #ffff;
    }
`;

export const ContainerFTXFooter = styled.div`
    h1 {
        text-align: center;
        color: #ffff;
    }

    display: flex;
    flex-direction: column;
    gap: 20px;
`;

export const ContainerRedesSociaisFTX = styled.div`
    display: flex;
    gap: 30px;
`;

export const ContainerRedeSocial = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 10px;

    p {
        color: #ffff;
        font-size: 1.4rem;
    }
`;


export const ContainerImageLogoFTX = styled.div`
    width: 35px;
    height: 35px;

    object-fit: contain;

    img {
        width: 100%;
        height: 100%;
    };  
`;
