import styled from "styled-components";
import BackgroundImagePrimarySection from '../../assets/BackgroundImagePrimarySection.png';

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
        width: 100%;
        height: 100%;
    }
`;

export const PrimarySection = styled.section`
    width: 100%;
    height: 80vh;

    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;

    text-align: center;

    background-image: url(${BackgroundImagePrimarySection});
    background-size: 100% 100%;
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

export const SecondarySection = styled.section`
    width: 100%;

    padding: 15px;

    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    gap: 50px;
`;

export const ContainerHeaderSecondarySection = styled.div`
    width: 100%;
    
    text-align: center;
    
    * {
        margin: 15px 0px;
    };

    h2 {
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
        h2 {
            font-size: 2.7rem;
            font-weight: bold;
        }

        p {
            font-size: 1.5rem;
        }
    };

    @media (max-width: 520px) {
        h2 {
            font-size: 2.4rem;
            font-weight: bold;
        }

        p {
            font-size: 1.3rem;
        }
    };
  
`;

export const ContainerCards = styled.div`
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;

    gap: 30px;
`;

export const ContainerButtonWhatsApp = styled.div`
    width: 100%;
    
    padding: 20px;

    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ThirdSession = styled.section`
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