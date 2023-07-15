import { FC, useEffect, useState } from 'react';
import primarySectionImage from '../../../assets/img/ImgBackgroundOneSection-min.webp';
import { HeaderSection, Main, Section } from '../../components/containers';
import { ContainerImage } from '../../components/containers/image';
import { Loading } from '../../components/loading';
import { pageLaunchFunction } from '../../shared/initialView';
import { TextPrimarySection, TitlePrimarySection } from './styled';

export const Home: FC = () => {
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
            <Section
                styled={{ height: '8.5x', theme: 'none', padding: 'none' }}
            >
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
                styled={{
                    align: {
                        'align-items': 'center',
                        direction: 'column',
                        gap: '10rem',
                    },
                    padding: 'full-edges',
                    theme: 'secondary',
                }}
            >
                <HeaderSection
                    title="Nossos Produtos"
                    subTitle={`Camisetas, bonés, calças e outras peças para qualquer ocasião. Calçados, artigos 
                    esportivos e uma linha incrível de acessórios`}
                    theme="secondary"
                />
                <div>dsadadsa</div>
                <button>dsadads</button>
            </Section>
        </Main>
    );
};
