import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
        font-family: 'Inter', sans-serif;
    }
    :root {
        font-size: 62.5%; // 62.5% = 10px
    }
`;

type themePropsStyled = {
    color: string;
    backgroundColor: string;
    colorHeaders: string;
};

export interface IGlobalTheme {
    primary: themePropsStyled;
    secondary: themePropsStyled;
    third: themePropsStyled;
}

export const GlobalTheme: IGlobalTheme = {
    primary: {
        backgroundColor: '#212196',
        color: '#ffff',
        colorHeaders: '#f28a2e',
    },
    secondary: {
        backgroundColor: '#ffff',
        color: '#0000',
        colorHeaders: '#212196',
    },
    third: {
        backgroundColor: '#ffff',
        color: '#0000',
        colorHeaders: '#ffff',
    },
};
