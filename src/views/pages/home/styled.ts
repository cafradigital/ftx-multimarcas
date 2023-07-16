import styled from 'styled-components';

export const TitlePrimarySection = styled.h1`
    width: 100%;
    max-width: 40rem;

    color: #fff;
    text-shadow: 1px 1px 10px black;
    font-size: 3rem;
    font-weight: bold;

    @media (max-width: 992px) {
        font-size: 2.5rem;
    }

    @media (max-width: 520px) {
        font-size: 2rem;
    }
`;

export const TextPrimarySection = styled.p`
    width: 100%;
    max-width: 50rem;

    color: #fff;
    text-shadow: 1px 1px 10px black;
    font-size: 1.75rem;
    letter-spacing: 6px;

    @media (max-width: 992px) {
        font-size: 1.5rem;
    }

    @media (max-width: 520px) {
        font-size: 1.25rem;
    }
`;
