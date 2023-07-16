import { IDataLadingPageProps } from './interface';

import primarySectionImage from '../assets/img/ImgBackgroundOneSection-min.webp';
import ImgProductOne from '../assets/img/ImgProductOne-min.webp';
import ImgProductThre from '../assets/img/ImgProductThre-min.webp';
import ImgProductTwo from '../assets/img/ImgProductTwo-min.webp';

export const DataLandingPage: IDataLadingPageProps = {
    primarySection: {
        theme: 'none',
        image: {
            url: primarySectionImage,
            label: 'Imagem grande de apresentação do produto central da loja. (Imagem de Homem usando uma Roupa de frio)',
        },
        texts: {
            title: `Tudo para Moda Masculina em um só lugar`,
            subTitle: `Variedade e preço baixo para todos os estilos e idades`,
        },
    },
    secondarySection: {
        theme: 'primary',
        texts: {
            title: 'Nossos Produtos',
            subTitle:
                'Camisetas, bonés, calças e outras peças para qualquer ocasião. Calçados, artigos esportivos e uma linha incrível de acessórios',
        },
        cards: [
            {
                title: 'Estilo Jogador Caro',
                img: {
                    url: ImgProductOne,
                    label: 'Imagem ilustrando as peças no estilo de jogador de futebol da loja',
                },
            },
            {
                title: 'Moda Básica',
                img: {
                    url: ImgProductTwo,
                    label: 'Imagem ilustrando as peças de moda básica da loja',
                },
            },
            {
                title: 'Estilo Cachorro',
                img: {
                    url: ImgProductThre,
                    label: 'Imagem ilustrando as peças de roupa do estilo cachorro',
                },
            },
        ],
    },
};
