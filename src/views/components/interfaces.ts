type themePropsStyled = {
    textColor: string;
    backgroundColor: string;
    colorHeaders: string;
    colorCards: string;
};

export interface IGlobalTheme {
    primary: themePropsStyled;
    secondary: themePropsStyled;
    third: themePropsStyled;
}
