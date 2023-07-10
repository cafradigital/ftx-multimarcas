import { FC } from 'react';
import { Loading } from '../../components/loading';

export const Home: FC = () => {
    return (
        <div>
            <Loading type="five" size="Big" />
        </div>
    );
};
