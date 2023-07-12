import { FC, useEffect, useState } from 'react';
import ReactFacebookPixel from 'react-facebook-pixel';
import TagManager from 'react-gtm-module';
import primarySectionImage from '../../../assets/img/ImgBackgroundOneSection-min.webp';
import { Main, Section } from '../../components/containers';
import { ContainerImage } from '../../components/containers/image';
import { Loading } from '../../components/loading';
import { pageLaunchFunction } from '../../shared/initialView';
import { TextPrimarySection, TitlePrimarySection } from './styled';

export const Home: FC = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        pageLaunchFunction(setLoading);

        ReactFacebookPixel.init('1310992763100155', undefined, {
            autoConfig: true,
            debug: false,
        });

        TagManager.initialize({ gtmId: 'GTM-K2XF8X9' });
    }, []);

    return (
        <Main>
            {loading && (
                <Loading size="big" type="four" backgroundColor="#e3e3e3" />
            )}
            <Section height="85vh" backgroundColor="none" padding="none">
                <ContainerImage
                    typeAdaptation="cover"
                    url={primarySectionImage}
                    align={{
                        direction: 'column',
                        'align-items': 'center',
                        'justify-content': 'center',
                        gap: '20px',
                        textAlign: 'center',
                    }}
                >
                    <TitlePrimarySection>
                        Tudo para Moda Masculina <br /> em um só lugar
                    </TitlePrimarySection>
                    <TextPrimarySection>
                        Variedade e preço baixo <br /> para todos os estilos e
                        idades
                    </TextPrimarySection>
                </ContainerImage>
            </Section>
            <Section
                align={{
                    'align-items': 'center',
                    direction: 'column',
                    gap: '10rem',
                }}
                padding="full-edges"
                backgroundColor="secondary"
            >
                <div>
                    <h1>ddasdasads</h1>
                    <p>dasdadasd</p>
                </div>
                <div>dasdasda</div>
                <button>dsadads</button>
            </Section>
        </Main>
    );
};
