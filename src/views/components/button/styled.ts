import styled from 'styled-components';
import { IGlobalTheme } from '../../../GlobalInterfaces';
import { IButtonStyleds } from './intefaces';

export const ButtonContainer = styled.a<{
    styled: IButtonStyleds;
    theme?: IGlobalTheme;
}>`
    width: 100%;

    min-width: 100px;
    max-width: ${({ styled }) => {
        if (styled.type === 'Custom')
            return styled.width ? styled.width : '300px';
        else return '300px';
    }};

    display: flex;
    align-items: center;
    justify-content: ${({ styled }) => {
        if (styled.type === 'Custom')
            return styled.justfyContext ? styled.justfyContext : 'center';
        else return 'center';
    }};

    text-decoration: none;

    cursor: pointer;

    h3 {
        text-align: center;
        flex: 1;
    }

    padding: ${({ styled }) => {
        if (styled.type === 'Custom')
            return styled.padding ? styled.padding : '5px 25px';
        else return '5px 25px';
    }};

    border-radius: ${({ styled }) => {
        if (styled.type === 'Custom')
            return styled.borderRadius ? styled.borderRadius : '50px';
        else return '50px';
    }};

    gap: 10px;

    background-color: ${({ styled, theme }) => {
        if (styled.type === 'Custom')
            return styled.backgroundColor ? styled.backgroundColor : 'white';
        if (styled.type === 'WhatsApp') return '#7ed957';

        switch (styled.theme) {
            case 'second':
                return theme.sections.second.button.background;
            case 'third':
                return theme.sections.third.button.background;
            case 'fourth':
                return theme.sections.fourth.button.background;
            case 'fifth':
                return theme.sections.fifth.button.background;
            case 'sixth':
                return theme.sections.sixth.button.background;
        }
    }};

    border: ${({ styled, theme }) => {
        if (styled.type === 'Custom')
            return styled.border ? styled.border : 'solid 2.5px';
        if (styled.type === 'WhatsApp') return 'solid 2.5px';

        switch (styled.theme) {
            case 'second':
                return `solid 2.5px ${theme.sections.second.button.border}`;
            case 'third':
                return `solid 2.5px ${theme.sections.third.button.border}`;
            case 'fourth':
                return `solid 2.5px ${theme.sections.fourth.button.border}`;
            case 'fifth':
                return `solid 2.5px ${theme.sections.fifth.button.border}`;
            case 'sixth':
                return `solid 2.5px ${theme.sections.sixth.button.border}`;
        }
    }};
    border-color: transparent;

    color: ${({ styled, theme }) => {
        if (styled.type === 'Custom') return styled.text?.color;
        if (styled.type === 'WhatsApp') return 'black';

        switch (styled.theme) {
            case 'second':
                return theme.sections.second.button.title.color;
            case 'third':
                return theme.sections.third.button.title.color;
            case 'fourth':
                return theme.sections.fourth.button.title.color;
            case 'fifth':
                return theme.sections.fifth.button.title.color;
            case 'sixth':
                return theme.sections.sixth.button.title.color;
        }
    }};

    box-shadow: 2.5px 2.5px 15px #00000050;
    text-shadow: 0.1px 0.1px 0.5px #00000060;

    font-size: ${({ styled }) => {
        if (styled.type === 'Custom') return styled.text?.fontSize;
        else return '1.2rem';
    }};

    transition: all 0.3s;

    &:hover {
        background-color: transparent;
        border: ${({ styled, theme }) => {
            if (styled.type === 'Custom')
                return styled.border ? styled.border : 'solid 2.5px black';
            if (styled.type === 'WhatsApp') return 'solid 2.5px #7ed957';

            switch (styled.theme) {
                case 'second':
                    return `solid 2.5px ${theme.sections.second.button.border}`;
                case 'third':
                    return `solid 2.5px ${theme.sections.third.button.border}`;
                case 'fourth':
                    return `solid 2.5px ${theme.sections.fourth.button.border}`;
                case 'fifth':
                    return `solid 2.5px ${theme.sections.fifth.button.border}`;
                case 'sixth':
                    return `solid 2.5px ${theme.sections.sixth.button.border}`;
            }
        }};

        color: ${({ styled, theme }) => {
            if (styled.type === 'Custom')
                return styled.border?.split(' ')[1]
                    ? styled.border?.split(' ')[1]
                    : 'black';
            if (styled.type === 'WhatsApp') return '#7ed957';

            switch (styled.theme) {
                case 'second':
                    return theme.sections.second.button.border;
                case 'third':
                    return theme.sections.third.button.border;
                case 'fourth':
                    return theme.sections.fourth.button.border;
                case 'fifth':
                    return theme.sections.fifth.button.border;
                case 'sixth':
                    return theme.sections.sixth.button.border;
            }
        }};
        box-shadow: none;
        text-shadow: none;
    }
`;
