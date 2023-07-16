import styled from 'styled-components';
import { IGlobalTheme } from '../../interfaces';
import { ILeafCardStyleds } from './interfaces';

export const ContainerLeafCard = styled.div<{
    styled: ILeafCardStyleds;
    theme: IGlobalTheme;
}>`
    max-width: ${({ styled }) => {
        switch (styled.size) {
            case 'small':
                return '200px';
            case 'medium':
                return '250px';
            case 'large':
                return '300px';
        }
    }};

    max-height: ${({ styled }) => {
        switch (styled.size) {
            case 'small':
                return '250px';
            case 'medium':
                return '300px';
            case 'large':
                return '350px';
        }
    }};

    min-width: ${({ styled }) => {
        switch (styled.size) {
            case 'small':
                return '150px';
            case 'medium':
                return '200px';
            case 'large':
                return '250px';
        }
    }};

    min-height: ${({ styled }) => {
        switch (styled.size) {
            case 'small':
                return '200px';
            case 'medium':
                return '250px';
            case 'large':
                return '300px';
        }
    }};

    text-align: center;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    box-shadow: 2px 2px 4px 0.5px
        ${({ styled }) => (styled.colorShadown ? styled.colorShadown : 'black')};

    background-color: ${({ styled, theme }) => {
        switch (styled.theme) {
            case 'primary':
                return theme.primary.colorCards;
            case 'secondary':
                return theme.secondary.colorCards;
            case 'third':
                return theme.third.colorCards;
            case 'none':
                return 'black';
        }
    }};

    border-top-right-radius: 30%;
    border-bottom-left-radius: 30%;

    h2 {
        color: ${({ styled, theme }) => {
            switch (styled.theme) {
                case 'primary':
                    return theme.primary.textColor;
                case 'secondary':
                    return theme.secondary.textColor;
                case 'third':
                    return theme.third.textColor;
            }
        }};

        margin-top: -25px;
        margin-left: 10px;
        font-size: 1.4rem;
    }
`;
