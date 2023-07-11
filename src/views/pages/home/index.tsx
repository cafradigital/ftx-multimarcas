import { FC, useState } from 'react';
import { Main, Section } from '../../components/containers';
import { Loading } from '../../components/loading';

export const Home: FC = () => {
    const [loading, setLoading] = useState(false);

    return (
        <Main>
            {loading && (
                <Loading size="big" type="four" backgroundColor="#ffff" />
            )}
            <Section
                height="auto"
                align={{ 'align-items': 'center', 'justify-content': 'center' }}
            >
                <div style={{ background: 'red' }}>dadasdasdasda</div>
            </Section>
        </Main>
    );
};
