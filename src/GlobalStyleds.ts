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
    section: {
        backgroundColor: string;
        text: {
            title: string;
            subTitle: string;
        };
    };
    cards: {
        backgroundColor: string;
        border: string;
        text: {
            title: string;
            subTitle: string;
        };
    };
    buttons: {
        backgroundColor: string;
        border: string;
        text: {
            title: string;
            subTitle: string;
        };
    };
};

export interface IGlobalTheme {
    primary: themePropsStyled;
    secondary: themePropsStyled;
    third: themePropsStyled;
}

export const GlobalTheme: IGlobalTheme = {
    primary: {
        section: {
            backgroundColor: '#212196',
            text: {
                title: '#f28a2e',
                subTitle: '#000000',
            },
        },
        cards: {
            backgroundColor: '#f28a2e',
            border: '#ffffff',
            text: {
                title: '#ffffff',
                subTitle: '#ffffff',
            },
        },
        buttons: {
            backgroundColor: 'black',
            border: '#ffffff',
            text: {
                title: '#ffffff',
                subTitle: '#ffffff',
            },
        },
    },
    secondary: {
        section: {
            backgroundColor: '#212196',
            text: {
                title: '#f28a2e',
                subTitle: '#000000',
            },
        },
        cards: {
            backgroundColor: '#f28a2e',
            border: '#ffffff',
            text: {
                title: '#ffffff',
                subTitle: '#ffffff',
            },
        },
        buttons: {
            backgroundColor: 'black',
            border: '#ffffff',
            text: {
                title: '#ffffff',
                subTitle: '#ffffff',
            },
        },
    },
    third: {
        section: {
            backgroundColor: '#212196',
            text: {
                title: '#f28a2e',
                subTitle: '#000000',
            },
        },
        cards: {
            backgroundColor: '#f28a2e',
            border: '#ffffff',
            text: {
                title: '#ffffff',
                subTitle: '#ffffff',
            },
        },
        buttons: {
            backgroundColor: 'black',
            border: '#ffffff',
            text: {
                title: '#ffffff',
                subTitle: '#ffffff',
            },
        },
    },
};
