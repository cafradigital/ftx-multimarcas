import styled from 'styled-components';

export const ContainerDropDown = styled.div<{ toogleDropDown: boolean }>`
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    border: 2px solid transparent;

    border-radius: ${({ toogleDropDown }) => toogleDropDown ? '20px 20px 0px 0px' : '50px'};

    background-color: #212196;

    position: relative;

    transition: all .4s;
`;

export const HeaderDropDown = styled.div<{ toogleDropDown: boolean }>`
    width: 100%;
    padding: 15px 25px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    cursor: pointer;

    transition: all .3s;
    border-radius: 50px;

    &:hover {
        background-color: #ffff;
        border-radius: ${({ toogleDropDown }) => toogleDropDown ? '18px 18px 0px 0px' : '50px'};

        h2 {
            color: #212196;
        }

        img {
            filter: brightness(.3) contrast(100%);
        }
    } 

    h2 {
        margin-left: 10px;
        flex: 1;
        text-align: center;
        color: #ffff;
        overflow: hidden;
        text-overflow: ellipsis;
    };
`;

export const ContainerImg = styled.div`

    width: 30px;
    height: 20px;

    object-fit: contain;

    img {
        width: 100%;
        height: 100%;
    }

`;

export const ContainerInformation = styled.div<{ toogleDropDown: boolean }>`
    position: absolute;

    width: 99.8%;
    max-height: 200px;

    overflow-y: scroll;

    background-color: #ffff;
    border: 2px solid #212196;

    ::-webkit-scrollbar-track {
        margin-bottom: 2px;
        border-radius: 0px 0px 20px 0px;
    }
    ::-webkit-scrollbar {
        background: transparent;
    }
    ::-webkit-scrollbar-thumb {
        background: transparent;
    }

    border-radius: 0px 0px 20px 20px;
    
    display: ${({ toogleDropDown }) => toogleDropDown ? 'flex' : 'none' };
    align-items: top;
    justify-content: center;
    text-align: center;

    top: 100%;

    z-index: 999;

    padding: 20px;

    p {
        max-width: 100%;
        font-size: 1.25rem;
    }
`;


