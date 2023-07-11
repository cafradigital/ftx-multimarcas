import { FC, useState } from 'react';
import { Main, Section } from '../../components/containers';
import { Loading } from '../../components/loading';

export const Home: FC = () => {
    const [loading, setLoading] = useState(true);

    return (
        <Main>
            {loading && (
                <Loading type="five" backgroundColor="#ffff" size="big" />
            )}
            <Section
                height="full"
                align={{ 'align-items': 'center', 'justify-content': 'center' }}
            >
                <div style={{ background: 'red' }}>dadasdasdasda</div>
            </Section>
        </Main>
    );
};
