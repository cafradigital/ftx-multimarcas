import { FC } from 'react';
import Logo from '../../assets/LogoFTX.png';
import ImgProductIlustration1 from '../../assets/ImgProductIlustration1.png';
import ImgProductIlustration2 from '../../assets/ImgProductIlustration2.png';
import ImgProductIlustration3 from '../../assets/ImgProductIlustration3.png';
import ImgShopCaieiras from '../../assets/ImgShopCaieiras.png';
import ImgShopFranciscoMorato from '../../assets/ImgShopFranciscoMorato.png';
import IconeWhatsApp from '../../assets/IconeWhatsApp.png';
import { ContainerButton, ContainerCard, ContainerFooterThirdSection, ContainerHeaderWhiteSection, ContainerIconeHeader, ContainerImgLocation, ContainerList, ContainerLocation, Header, PrimarySection, WitheSection, BlueSection, ContainerHeaderBlueSection } from './home.styled';
import { CardLeaf } from '../../components/CardLeaf';
import { Button } from '../../components/Button';
import ImgWhatsApp from '../../assets/ImgWhatsApp.png';
import ImgIconeAvaliação from '../../assets/ImgIconeAvaliação.png';
import { SimpleCard } from '../../components/SimpleCard';

export const Home: FC = () => {
    return (
        <main>
            <Header>
                <ContainerIconeHeader>
                    <img src={Logo} alt="Logo da FTX Multi Marcas" />
                </ContainerIconeHeader>
                <ContainerIconeHeader>
                    <img src={IconeWhatsApp} alt="Icone do Whatsapp" />
                </ContainerIconeHeader>
            </Header>
            <PrimarySection>
                <h1>Tudo para Moda Masculina <br/> em um só lugar</h1>
                <p>Variedade e preço baixo <br/> para todos os estilos e idades</p>
            </PrimarySection>
            <WitheSection>
                <ContainerHeaderWhiteSection>
                    <h1>Nossos Produtos</h1>
                    <p>Camisetas, bonés, calças e outras peças para qualquer ocasião. Calçados, artigos <br/> esportivos e uma linha incrível de acessórios.</p>
                </ContainerHeaderWhiteSection>
                <ContainerCard>
                    <CardLeaf img={{
                        label: "Imagem de Ilustração de Produto 'Estilo jogador caro'",
                        url: ImgProductIlustration1
                    }} >Estilo jogador caro</CardLeaf>
                    <CardLeaf img={{
                        label: "Imagem de Ilustração de Produto 'Moda Básica'",
                        url: ImgProductIlustration2
                    }} >Moda Básica</CardLeaf>
                    <CardLeaf img={{
                        label: "Imagem de Ilustração de Produto 'Estilo cachorro'",
                        url: ImgProductIlustration3
                    }} >Estilo cachorro</CardLeaf>
                </ContainerCard>
                <ContainerButton>
                    <Button img={{ label: 'Imagem do Icone do WhatsApp', url: ImgWhatsApp }} >CHAMA NO WHATS</Button>
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
                            <Button img={{ label: 'Imagem do Icone do WhatsApp', url: ImgWhatsApp }} >CAIEIRAS</Button>
                        </ContainerLocation>
                        <ContainerLocation>
                            <ContainerImgLocation>
                                <img src={ImgShopFranciscoMorato} alt="Imagem da Loja da FTX de Caieiras - SP" />
                            </ContainerImgLocation>
                            <Button img={{ label: 'Imagem do Icone do WhatsApp', url: ImgWhatsApp }} >FRANCISCO MORATO</Button>
                        </ContainerLocation>
                    </ContainerFooterThirdSection>
            </BlueSection> 
            <WitheSection>
                <ContainerHeaderWhiteSection>
                    <h1>Quem Somos</h1>
                    <p>Nascidos e criados em Caieiras, família de 06 irmãos e filhos do Sr Valdemar e <br/> D. Esther. Vivendo e conectados à Caieiras e região até os dias de hoje.</p>
                </ContainerHeaderWhiteSection>
                <ContainerCard>
                    <SimpleCard 
                        img={{
                            label: "Imagem do Sócio da FTX 'Daniel Teixeira'",
                            url: ImgProductIlustration3
                        }}
                        text={{
                            title: 'Daniel Teixeira',
                            description: 'Compromentimento e dedicação em tudo.'
                        }}
                    />
                    <SimpleCard 
                        img={{
                            label: "Imagem do Sócio da FTX 'Gilmar Teixeira'",
                            url: ImgProductIlustration3
                        }}
                        text={{
                            title: 'Gilmar Teixeira',
                            description: 'Amigo e o cara das histórias mais engraçadas.'
                        }}
                    />
                    <SimpleCard 
                        img={{
                            label: "Imagem do Sócio da FTX 'Gilberto Teixeira'",
                            url: ImgProductIlustration3
                        }}
                        text={{
                            title: 'Gilberto Teixeira',
                            description: 'Talento e muita criatividade em tudo que faz.'
                        }}
                    />
                </ContainerCard>
                <ContainerButton>
                    <Button img={{ label: 'Imagem do Icone do WhatsApp', url: ImgWhatsApp }} >ESTAMOS TE ESPERANDO!</Button>
                </ContainerButton>
            </WitheSection>
            <BlueSection>
                <ContainerHeaderBlueSection>
                    <h1>Nossas Avaliações</h1>
                    <p>Respeito e honestidade, valores que não abrimos mão <br/> e fazemos de tudo para levar até você todos os dias.</p>
                </ContainerHeaderBlueSection>
                <ContainerButton>
                    <Button img={{ label: 'Imagem do Icone de Avaliação', url: ImgIconeAvaliação }} >NOS AVALIE VOCÊ TAMBÉM!</Button>
                </ContainerButton>
            </BlueSection>
            <WitheSection>
                <ContainerHeaderWhiteSection>
                    <h1>FAQ</h1>
                    <p>Ficou com dúvida? Relaxa... aqui em baixo tem várias perguntas, <br/> todas feitas pelos nossos cliente e respostas por nós no detalhe.</p>
                </ContainerHeaderWhiteSection>
                <div>
                </div>
                <ContainerButton>
                    <Button img={{ label: 'Imagem do Icone do WhatsApp', url: ImgWhatsApp }} >ESTÁ COM DÚVIDA? PERGUNTE PARA NÓS!</Button>
                </ContainerButton>
            </WitheSection>
            <BlueSection>

            </BlueSection>
        </main>
    )
};