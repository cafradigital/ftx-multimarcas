import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Blog } from '../views/pages/blog';
import { Home } from '../views/pages/home';
import { Login } from '../views/pages/login';
import { PrivateRouters } from './privateRouters';

export const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />

                <Route element={<PrivateRouters />}>
                    <Route path="/blog" element={<Blog />} />
                </Route>
            </Routes>
        </Router>
    );
};
