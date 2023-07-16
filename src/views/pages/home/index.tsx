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
import { TextPrimarySection, TitlePrimarySection } from './styled';

export const Home: FC = () => {
    const { primarySection, secondarySection } = DataLandingPage;
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
            <Section height="8.5x" theme={primarySection.theme} padding="none">
                <BackgroundImage
                    typeAdaptation="cover"
                    img={{
                        url: primarySection.image.url,
                        label: primarySection.image.label,
                    }}
                    align={{
                        direction: 'column',
                        'align-items': 'center',
                        'justify-content': 'center',
                        gap: '20px',
                        textAlign: 'center',
                    }}
                >
                    <TitlePrimarySection>
                        {primarySection.texts.title}
                    </TitlePrimarySection>
                    <TextPrimarySection>
                        {primarySection.texts.subTitle}
                    </TextPrimarySection>
                </BackgroundImage>
            </Section>
            <Section
                align={{
                    'align-items': 'center',
                    direction: 'column',
                    gap: '5rem',
                }}
                padding="full-edges"
                theme={secondarySection.theme}
            >
                <HeaderSection
                    title={secondarySection.texts.title}
                    subTitle={secondarySection.texts.subTitle}
                    theme={secondarySection.theme}
                />
                <Container
                    align={{
                        'align-items': 'center',
                        'justify-content': 'space-around',
                        wrap: 'wrap',
                        gap: '5rem',
                    }}
                >
                    {secondarySection.cards.map((card, index) => (
                        <LeafCard
                            key={index}
                            title={card.title}
                            size="medium"
                            theme={secondarySection.theme}
                            img={{
                                url: card.img.url,
                                label: card.img.label,
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
