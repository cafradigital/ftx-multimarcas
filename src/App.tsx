import { FC } from 'react';
import { Home } from './views/pages/home';
import { GlobalStyle } from './GlobalStyle';

export const App: FC = () => {
    return (
        <>
            <GlobalStyle/>
            <Home/>
        </>
    )
};