import { FC } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, GlobalTheme } from './GlobalStyleds';
import { AppRouter } from './routes';

export const App: FC = () => {
    return (
        <>
            <GlobalStyle />
            <ThemeProvider theme={GlobalTheme}>
                <AppRouter />
            </ThemeProvider>
        </>
    );
};
