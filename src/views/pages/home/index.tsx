import { FC, useEffect } from 'react';

import ImgLogoFtx from '../../assets/img/ImgLogoFtx-min.webp';
import ImgProductOne from '../../assets/img/ImgProductOne-min.webp';
import ImgProductTwo from '../../assets/img/ImgProductTwo-min.webp';
import ImgProductThre from '../../assets/img/ImgProductThre-min.webp';
import ImgShopCaieiras from '../../assets/img/ImgShopCaieiras-min.webp';
import ImgShopFranciscoMorato from '../../assets/img/ImgShopFranciscoMorato-min.webp';
import ImgSocioOne from '../../assets/img/ImgSocioOne-min.webp';
import ImgSocioTwo from '../../assets/img/ImgSocioTwo-min.webp';
import ImgSocioThre from '../../assets/img/ImgSocioThre-min.webp';
import ImgWhatsAppClean from '../../assets/img/ImgWhatsAppClean-min.webp';
import ImgWhatsApp from '../../assets/img/ImgWhatsApp-min.webp';
import ImgLogoCafra from '../../assets/img/ImgLogoCafra-min.webp';
import ImgLogoFecebook from '../../assets/img/ImgLogoFecebook-min.webp';
import ImgLogoInstagram from '../../assets/img/ImgLogoInstagram-min.webp';
import ImgLogoAvaliationUserGrem from '../../assets/img/ImgLogoAvaliationUserGrem-min.webp';
import ImgLogoAvaliationUserPink from '../../assets/img/ImgLogoAvaliationUserPink-min.webp';
import ImgLogoAvaliationUserOrange from '../../assets/img/ImgLogoAvaliationUserOrange-min.webp';

import {
    ContainerButton,
    ContainerCard,
    ContainerFooterThirdSection,
    ContainerHeaderWhiteSection,
    ContainerIconeHeader,
    ContainerImgLocation,
    ContainerList,
    ContainerLocation,
    Header,
    PrimarySection,
    WitheSection,
    BlueSection,
    ContainerHeaderBlueSection,
    ContainerDropDownHome,
    Footer,
    CopyRydem,
    ContainerHeaderFooter,
    ContainerSectionCafra,
    ContainerImgCafra,
    ContainerImageLogoFTX,
    ContainerRedesSociaisCafra,
    ContainerFTXFooter,
    ContainerRedesSociaisFTX,
    ContainerRedeSocial
} from './home.styled';

import { CardLeaf } from '../../components/CardLeaf';
import { Button } from '../../components/Button';
import { SimpleCard } from '../../components/SimpleCard';
import { CardRating } from '../../components/CardRating';
import { DropDown } from '../../components/DropDown';
import { useSendMessage } from '../../hooks/useSendMessage';
import ReactFacebookPixel from 'react-facebook-pixel';

export const Home: FC = () => {

    const { sendMessageWhatsApp } = useSendMessage();

    useEffect(() => {
        setTimeout(() => {
            ReactFacebookPixel.init('651748680194619', undefined, { autoConfig: true, debug: false });
            ReactFacebookPixel.pageView();
        }, 2000);
    }, []);

    return (
        <main>
            <Header>
                <ContainerIconeHeader onClick={() => { window.scrollTo(0, 0) }}  >
                    <img src={ImgLogoFtx} alt="Logo da FTX Multi Marcas" />
                </ContainerIconeHeader>
                <ContainerIconeHeader>
                    <img onClick={() => sendMessageWhatsApp({ message: 'Olá, estou entrando em contato pelo site da FTX.', phoneNumber: '5511956556096'})} src={ImgWhatsApp} alt="Icone do Whatsapp" />
                </ContainerIconeHeader>
            </Header>
            <PrimarySection>
                <h1>Tudo para Moda Masculina <br /> em um só lugar</h1>
                <p>Variedade e preço baixo <br /> para todos os estilos e idades</p>
            </PrimarySection>
            <WitheSection>
                <ContainerHeaderWhiteSection>
                    <h1>Nossos Produtos</h1>
                    <p>Camisetas, bonés, calças e outras peças para qualquer ocasião. Calçados, artigos <br /> esportivos e uma linha incrível de acessórios.</p>
                </ContainerHeaderWhiteSection>
                <ContainerCard>
                    <CardLeaf img={{
                        label: "Imagem de Ilustração de Produto 'Estilo jogador caro'",
                        url: ImgProductOne
                    }} >Estilo Jogador Caro</CardLeaf>
                    <CardLeaf img={{
                        label: "Imagem de Ilustração de Produto 'Moda Básica'",
                        url: ImgProductTwo
                    }} >Moda Básica</CardLeaf>
                    <CardLeaf img={{
                        label: "Imagem de Ilustração de Produto 'Estilo cachorro'",
                        url: ImgProductThre
                    }} >Estilo Cachorro</CardLeaf>
                </ContainerCard>
                <ContainerButton>
                    <Button eventClick={() => sendMessageWhatsApp({ message: 'Olá, estou entrando em contato pelo site da FTX.', phoneNumber: '5511956556096'})} img={{ label: 'Imagem do Icone do WhatsApp', url: ImgWhatsAppClean }} >CHAMA NO WHATS</Button>
                </ContainerButton>
            </WitheSection>
            <BlueSection>
                <h1>Vantagens e Benefícios</h1>
                <ContainerList>
                    <li>Roupas, calçados e acessórios com 100% de garantia. Cliente não fica no prejuizo!</li>
                    <li>Muita variedade; moda surf, street wear, pluz size, esporte, infantil e muito mais;</li>
                    <li>Todas as formas de pagamentos e parcelamentos incríveis;</li>
                    <li>Trabalhamos com encomendas daquela peça rara que você não quer cair em golpe na internet;</li>
                    <li>Preço do Brás! Sem muvuca, ambiente confortável e total segurança.</li>
                </ContainerList>
                <ContainerFooterThirdSection>
                    <ContainerLocation>
                        <ContainerImgLocation>
                            <img src={ImgShopCaieiras} alt="Imagem da Loja da FTX de Caieiras - SP" />
                        </ContainerImgLocation>
                        <Button eventClick={() => sendMessageWhatsApp({ message: 'Olá, estou entrando em contato pelo site da FTX.', phoneNumber: '5511956556096'})} img={{ label: 'Imagem do Icone do WhatsApp', url: ImgWhatsAppClean }} >CAIEIRAS</Button>
                    </ContainerLocation>
                    <ContainerLocation>
                        <ContainerImgLocation>
                            <img src={ImgShopFranciscoMorato} alt="Imagem da Loja da FTX de Francisco Morato - SP" />
                        </ContainerImgLocation>
                        <Button eventClick={() => sendMessageWhatsApp({ message: 'Olá, estou entrando em contato pelo site da FTX.', phoneNumber: '5511994352525'})} img={{ label: 'Imagem do Icone do WhatsApp', url: ImgWhatsAppClean }} >FRANCISCO MORATO</Button>
                    </ContainerLocation>
                </ContainerFooterThirdSection>
            </BlueSection>
            <WitheSection>
                <ContainerHeaderWhiteSection>
                    <h1>Quem Somos</h1>
                    <p>Nascidos e criados em Caieiras, família de 06 irmãos e filhos do Sr Valdemar e <br /> D. Esther. Vivendo e conectados à Caieiras e região até os dias de hoje.</p>
                </ContainerHeaderWhiteSection>
                <ContainerCard>
                    <SimpleCard
                        img={{
                            label: "Imagem do Sócio da FTX 'Daniel Teixeira'",
                            url: ImgSocioOne
                        }}
                        text={{
                            title: 'Daniel Teixeira',
                            description: 'Compromentimento e dedicação em tudo.'
                        }}
                    />
                    <SimpleCard
                        img={{
                            label: "Imagem do Sócio da FTX 'Gilmar Teixeira'",
                            url: ImgSocioTwo
                        }}
                        text={{
                            title: 'Gilmar Teixeira',
                            description: 'Amigo e o cara das histórias mais engraçadas.'
                        }}
                    />
                    <SimpleCard
                        img={{
                            label: "Imagem do Sócio da FTX 'Gilberto Teixeira'",
                            url: ImgSocioThre
                        }}
                        text={{
                            title: 'Gilberto Teixeira',
                            description: 'Talento e muita criatividade em tudo que faz.'
                        }}
                    />
                </ContainerCard>
                <ContainerButton>
                    <Button eventClick={() => sendMessageWhatsApp({ message: 'Olá, estou entrando em contato pelo site da FTX.', phoneNumber: '5511956556096'})} img={{ label: 'Imagem do Icone do WhatsApp', url: ImgWhatsAppClean }} >ESTAMOS TE ESPERANDO!</Button>
                </ContainerButton>
            </WitheSection>
            <BlueSection>
                <ContainerHeaderBlueSection>
                    <h1>Nossas Avaliações</h1>
                    <p>Respeito e honestidade, valores que não abrimos mão <br /> e fazemos de tudo para levar até você todos os dias.</p>
                </ContainerHeaderBlueSection>
                <ContainerCard>
                    <CardRating
                        img={{
                            label: "Imagem do Sócio da FTX 'Gilberto Teixeira'",
                            url: ImgLogoAvaliationUserGrem
                        }}
                        text={{
                            title: 'Adeildo Lima',
                            description: 'Comprei umas blusa de frio.ontem na loja FTX  NO eucalipto  todas ficaram ótimas  parabéns pelo atendimento eu recomendo loja tem bastante variedades e ótimos preços.'
                        }}
                        Evaluations={5}
                    />
                    <CardRating
                        img={{
                            label: "Imagem do Sócio da FTX 'Gilberto Teixeira'",
                            url: ImgLogoAvaliationUserPink
                        }}
                        text={{
                            title: 'Amanda Santos',
                            description: 'Atendente atencioso, pude comprar camiseta tamanho grande e encomendar tênis tamanho grande. Aparentemente de boa qualidade. Até o momento estou satisfeita com a loja.'
                        }}
                        Evaluations={4}
                    />
                    <CardRating
                        img={{
                            label: "Imagem do Sócio da FTX 'Gilberto Teixeira'",
                            url: ImgLogoAvaliationUserOrange
                        }}
                        text={{
                            title: 'Alessandra Lima',
                            description: 'Gosto muito da loja FTX ,muitas variedades de roupas, preços incríveis,toda semana faço questão de dar um pulo na loja para ver as novidades.'
                        }}
                        Evaluations={5}
                    />
                </ContainerCard>
                <ContainerButton>
                    <Button eventClick={() => sendMessageWhatsApp({ message: 'Olá, estou entrando em contato pelo site da FTX.', phoneNumber: '5511956556096'})} img={{ label: 'Imagem do Icone de Avaliação', url: ImgWhatsAppClean }} >ENTRE EM CONTATO AGORA MESMO!</Button>
                </ContainerButton>
            </BlueSection>
            <WitheSection>
                <ContainerHeaderWhiteSection>
                    <h1>FAQ</h1>
                    <p>Ficou com dúvida? Relaxa... aqui em baixo tem várias perguntas, <br /> todas feitas pelos nossos cliente e respostas por nós no detalhe.</p>
                </ContainerHeaderWhiteSection>
                <ContainerDropDownHome>
                    <DropDown title='Qual modelo de roupa a loja trabalha?' description='Somos 100% focado em moda masculina; camisetas, bonés, calçados e tudo que um homem precisa para se vestir bem.' />
                    <DropDown title='Quais as formas de pagamento vocês trabalham?' description='Aceitamos todas as formas de pagamento e parcelamos em até 10x sem juros.' />
                    <DropDown title='Caso eu não goste da roupa ou tenha algum defeito posso trocar?' description='Nossa política é que o cliente nunca fica no prejuízo. Havendo a necessidade de troca é só procurar uma das loja e trocar pela peça que você ou a pessoa que você presenteou escolher. Aparecendo qualquer defeito na peça trocamos sem qualquer discussão.' />
                    <DropDown title='Quais modelos de camisetas vocês trabalham?' description='Diversos modelos; peruanas, longline, esportivas, over size, social e muito mais.' />
                    <DropDown title='Quais tamanhos de roupas vocês trabalham?' description='Temos body ou macacão para crianças recém-nascidas até o tamanho G6.' />
                </ContainerDropDownHome>
                <ContainerButton>
                    <Button eventClick={() => sendMessageWhatsApp({ message: 'Olá, estou entrando em contato pelo site da FTX.', phoneNumber: '5511956556096'})} img={{ label: 'Imagem do Icone do WhatsApp', url: ImgWhatsAppClean }} >ESTÁ COM DÚVIDA? PERGUNTE PARA NÓS!</Button>
                </ContainerButton>
            </WitheSection>
            <Footer>
                <ContainerHeaderFooter>
                    <ContainerSectionCafra>
                        <ContainerImgCafra>
                            <img src={ImgLogoCafra} alt="Imagem da Logo da Cafra" />
                        </ContainerImgCafra>
                        <ContainerRedesSociaisCafra>
                            <p><strong>E-mail: </strong>cafradigital@gmail.com</p>
                            <p><strong>Telefone: </strong>(11) 96028-4736</p>
                            <p><strong>Site: </strong><a href="https://www.cafra.com.br">www.cafra.com.br</a></p>
                        </ContainerRedesSociaisCafra>
                    </ContainerSectionCafra>
                    <ContainerFTXFooter>
                        <h1>FTX Redes Sociais</h1>
                        <ContainerRedesSociaisFTX>
                            <ContainerRedeSocial>
                                <ContainerImageLogoFTX>
                                    <img src={ImgLogoFecebook} alt="Logo do Fecebook" />
                                </ContainerImageLogoFTX>
                                <p>@ftxmultimarcas</p>
                            </ContainerRedeSocial>
                            <ContainerRedeSocial>
                                <ContainerImageLogoFTX>
                                    <img src={ImgLogoInstagram} alt="Logo do Instagram" />
                                </ContainerImageLogoFTX>
                                <p>@ftxmultimarcas</p>
                            </ContainerRedeSocial>
                        </ContainerRedesSociaisFTX>
                    </ContainerFTXFooter>
                </ContainerHeaderFooter>
                <CopyRydem>FTX Multimarcas ® 2023 - Todos os direitos reservados | Desenvolvido por @CAFRA</CopyRydem>
            </Footer>
        </main>
    )
};