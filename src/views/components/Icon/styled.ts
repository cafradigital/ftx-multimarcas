import styled from 'styled-components';
import { IGlobalTheme } from '../interfaces';
import { IConStyledProps } from './interface';

export const IconContainer = styled.i<{
    styled: IConStyledProps;
    theme: IGlobalTheme;
}>`
    color: ${({ styled, theme }) => {
        if (styled?.color) return styled.color;
        else return theme.primary.color;
    }};

    cursor: ${({ styled }) => (styled?.cursor ? styled.cursor : 'initial')};

    font-size: ${({ styled }) => {
        switch (styled.size) {
            case '1x':
                return '1rem';
            case '2x':
                return '2rem';
            case '3x':
                return '3rem';
            case '4x':
                return '4rem';
            case '5x':
                return '5rem';
            case '6x':
                return '6rem';
            case '7x':
                return '7rem';
            case '8x':
                return '8rem';
            case '9x':
                return '9rem';
            case '10x':
                return '10rem';
            default:
                return '1rem';
        }
    }};
`;
