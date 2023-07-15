import styled from 'styled-components';
import { IHeaderSectionStyled } from './interfaces';

export const ContainerTextHeaderSection = styled.div<{
    styled: Omit<IHeaderSectionStyled, 'customStyleds'>;
}>`
    width: 100%;
    max-width: 70rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    gap: 10px;

    text-align: center;

    h1 {
        font-size: 2.8rem;
        font-weight: bold;
        color: ${({ styled, theme }) => {
            switch (styled.theme) {
                case 'primary':
                    return theme.primary.colorHeaders;
                case 'secondary':
                    return theme.secondary.colorHeaders;
                case 'third':
                    return theme.third.colorHeaders;
                case 'none':
                    return 'transparent';
            }
        }};
        text-shadow: 0.5px 0.5px 1.5px #00000080;
    }

    p {
        font-size: 1.8rem;
        color: ${({ styled, theme }) => {
            switch (styled.theme) {
                case 'primary':
                    return theme.primary.textColor;
                case 'secondary':
                    return theme.secondary.textColor;
                case 'third':
                    return theme.third.textColor;
                case 'none':
                    return 'transparent';
            }
        }};
    }

    @media (max-width: 992px) {
        h1 {
            font-size: 2.6rem;
        }

        p {
            font-size: 1.6rem;
        }
    }

    @media (max-width: 520px) {
        h1 {
            font-size: 2.4rem;
        }
        p {
            font-size: 1.4rem;
        }
    }
`;
