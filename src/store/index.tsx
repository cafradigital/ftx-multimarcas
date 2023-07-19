import { IDataLadingPage } from './interface';

import primarySectionImage from '../assets/img/ImgBackgroundOneSection-min.webp';
import ImgProductOne from '../assets/img/ImgProductOne-min.webp';
import ImgProductThre from '../assets/img/ImgProductThre-min.webp';
import ImgProductTwo from '../assets/img/ImgProductTwo-min.webp';

export const DataLandingPage: IDataLadingPage = {
    sections: {
        primary: {
            texts: {
                title: `Tudo para Moda Masculina \n em um só lugar`,
                subTitle: `Variedade e preço baixo \n para todos os estilos e idades`,
            },
            image: {
                url: primarySectionImage,
                label: 'Imagem grande de apresentação do produto central da loja. (Imagem de Homem usando uma Roupa de frio)',
            },
        },
        second: {
            texts: {
                title: 'Nossos Produtos',
                subTitle:
                    'Camisetas, bonés, calças e outras peças para qualquer ocasião. Calçados, artigos esportivos e uma linha incrível de acessórios',
            },
            cards: [
                {
                    texts: {
                        title: 'Estilo Jogador Caro',
                    },
                    image: {
                        url: ImgProductOne,
                        label: 'Imagem ilustrando as peças no estilo de jogador de futebol da loja',
                    },
                },
                {
                    texts: {
                        title: 'Moda Básica',
                    },
                    image: {
                        url: ImgProductTwo,
                        label: 'Imagem ilustrando as peças de moda básica da loja',
                    },
                },
                {
                    texts: {
                        title: 'Estilo Cachorro',
                    },
                    image: {
                        url: ImgProductThre,
                        label: 'Imagem ilustrando as peças de roupa do estilo cachorro',
                    },
                },
            ],
        },
    },
};
