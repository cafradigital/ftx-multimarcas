import configuresStyledComponetsProps from '@emotion/is-prop-valid';
import { FC } from 'react';
import { StyleSheetManager, ThemeProvider } from 'styled-components';
import { GlobalStyle, GlobalTheme } from './GlobalStyleds';
import { AppRouter } from './routes';

export const App: FC = () => {
    return (
        <>
            <StyleSheetManager
                shouldForwardProp={configuresStyledComponetsProps}
            >
                <GlobalStyle />
                <ThemeProvider theme={GlobalTheme}>
                    <AppRouter />
                </ThemeProvider>
            </StyleSheetManager>
        </>
    );
};
