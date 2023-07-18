import { FC, useEffect, useState } from 'react';
import { DataLandingPage } from '../../../store';
import { LeafCard } from '../../components/cards';
import {
    BackgroundImage,
    Container,
    HeaderSection,
    Main,
    Section,
} from '../../components/containers';
import { Loading } from '../../components/loading';
import { pageLaunchFunction } from '../../shared/initialView';

export const Home: FC = () => {
    const { sections } = DataLandingPage;
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        pageLaunchFunction({
            setLoading,
            initialTags: {
                tagFacebookPixel: '1310992763100155',
                tagManager: 'GTM-K2XF8X9',
            },
            addPageView: true,
        });
    }, []);

    return (
        <Main>
            {loading && (
                <Loading size="big" type="four" backgroundColor="#e3e3e3" />
            )}
            <Section height="8.5x" theme={'primary'} padding="none">
                <BackgroundImage
                    typeAdaptation="cover"
                    img={{
                        url: sections.primary.image?.url
                            ? sections.primary.image?.url
                            : '',
                        label: sections.primary.image?.label
                            ? sections.primary.image?.label
                            : 'Imagem Não Encontrada',
                    }}
                    align={{
                        direction: 'column',
                        'align-items': 'center',
                        'justify-content': 'center',
                        textAlign: 'center',
                    }}
                >
                    <HeaderSection
                        title={sections.primary.texts.title}
                        subTitle={sections.primary.texts.subTitle}
                        theme={'primary'}
                    />
                </BackgroundImage>
            </Section>
            <Section
                align={{
                    'align-items': 'center',
                    direction: 'column',
                    gap: '5rem',
                }}
                padding="full-edges"
                theme={'second'}
            >
                <HeaderSection
                    title={sections.second.texts.title}
                    subTitle={sections.second.texts.subTitle}
                    theme={'second'}
                />
                <Container
                    align={{
                        'align-items': 'center',
                        'justify-content': 'space-around',
                        wrap: 'wrap',
                        gap: '5rem',
                    }}
                >
                    {sections.second.cards.map((card, index) => (
                        <LeafCard
                            key={index}
                            title={card.texts.title}
                            size="medium"
                            theme={'second'}
                            img={{
                                url: card.image?.url ? card.image?.url : '',
                                label: card.image?.label
                                    ? card.image?.label
                                    : 'Imagem Não Encontrada',
                            }}
                            customStyleds={{
                                color: '#ffffff',
                            }}
                        />
                    ))}
                </Container>
                <button>dsadads</button>
            </Section>
        </Main>
    );
};
