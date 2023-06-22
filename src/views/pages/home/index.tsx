import { FC } from 'react';
import Logo from '../../assets/LogoFTX.png';
import ImgProductIlustration1 from '../../assets/ImgProductIlustration1.png';
import ImgProductIlustration2 from '../../assets/ImgProductIlustration2.png';
import ImgProductIlustration3 from '../../assets/ImgProductIlustration3.png';
import ImgShopCaieiras from '../../assets/ImgShopCaieiras.png';
import ImgShopFranciscoMorato from '../../assets/ImgShopFranciscoMorato.png';
import IconeWhatsApp from '../../assets/IconeWhatsApp.png';
import { ContainerButtonWhatsApp, ContainerCards, ContainerFooterThirdSection, ContainerHeaderSecondarySection, ContainerIconeHeader, ContainerImgLocation, ContainerList, ContainerLocation, Header, PrimarySection, SecondarySection, ThirdSession } from './home.styled';
import { Card } from '../../components/Card';
import { ButtonWhatsApp } from '../../components/ButtonWhatsApp';

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
            <SecondarySection>
                <ContainerHeaderSecondarySection>
                    <h2>Nossos Produtos</h2>
                    <p>Camisetas, bonés, calças e outras peças para qualquer ocasião. Calçados, artigos <br/> esportivos e uma linha incrível de acessórios.</p>
                </ContainerHeaderSecondarySection>
                <ContainerCards>
                    <Card img={{
                        label: "Imagem de Ilustração de Produto 'Estilo jogador caro'",
                        url: ImgProductIlustration1
                    }} >Estilo jogador caro</Card>
                    <Card img={{
                        label: "Imagem de Ilustração de Produto 'Moda Básica'",
                        url: ImgProductIlustration2
                    }} >Moda Básica</Card>
                    <Card img={{
                        label: "Imagem de Ilustração de Produto 'Estilo cachorro'",
                        url: ImgProductIlustration3
                    }} >Estilo cachorro</Card>
                </ContainerCards>
                <ContainerButtonWhatsApp>
                    <ButtonWhatsApp>CHAMA NO WHATS</ButtonWhatsApp>
                </ContainerButtonWhatsApp>
            </SecondarySection>
            <ThirdSession>
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
                            <ButtonWhatsApp>CAIEIRAS</ButtonWhatsApp>
                        </ContainerLocation>
                        <ContainerLocation>
                            <ContainerImgLocation>
                                <img src={ImgShopFranciscoMorato} alt="Imagem da Loja da FTX de Caieiras - SP" />
                            </ContainerImgLocation>
                            <ButtonWhatsApp>FRANCISCO MORATO</ButtonWhatsApp>
                        </ContainerLocation>
                    </ContainerFooterThirdSection>
            </ThirdSession> 
            <section>
                
            </section>
            <section></section>
            <section></section>
        </main>
    )
};