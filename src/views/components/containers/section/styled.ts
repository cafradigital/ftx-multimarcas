import styled from 'styled-components';
import { IGlobalTheme } from '../../interfaces';
import { ISectionStyleds } from './interfaces';

export const SectionContainer = styled.section<{
    styled: ISectionStyleds;
    theme: IGlobalTheme;
}>`
    width: 100%;

    display: flex;

    text-align: ${({ styled }) =>
        styled.align?.textAlign ? styled.align?.textAlign : 'initial'};

    gap: ${({ styled }) => (styled.align?.gap ? styled.align?.gap : '')};

    flex-wrap: ${({ styled }) =>
        styled.align?.wrap ? styled.align?.wrap : 'wrap'};

    flex-direction: ${({ styled }) =>
        styled.align?.direction ? styled.align?.direction : 'row'};

    align-items: ${({ styled }) =>
        styled.align?.['align-items']
            ? styled.align?.['align-items']
            : 'initial'};

    justify-content: ${({ styled }) =>
        styled.align?.['justify-content']
            ? styled.align?.['justify-content']
            : 'initial'};

    height: ${({ styled }) => {
        switch (styled?.height) {
            case 'auto':
                return 'auto';
            case 'full':
                return '100vh';
        }

        return styled.height;
    }};

    padding: ${({ styled }) => {
        switch (styled?.padding) {
            case 'auto':
                return '0% 5%';
            case 'full-edges':
                return '2.5% 5%';
            case 'side-edges':
                return '0% 5%';
            case 'top-and-bottom-edges':
                return '2.5% 0%';
            case 'none':
                return 'none';
        }
    }};

    background-color: ${({ styled, theme }) => {
        switch (styled.backgroundColor) {
            case 'primary':
                return theme.primary.backgroundColor;
            case 'secondary':
                return theme.secondary.backgroundColor;
            case 'third':
                return theme.third.backgroundColor;
            case 'none':
                return 'transparent';
        }
    }};
`;
