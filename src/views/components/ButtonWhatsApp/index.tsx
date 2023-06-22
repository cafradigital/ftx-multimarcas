import { FC } from 'react';
import { IButtonWhatsAppProps } from './ButtonWhatsApp.interface';
import { ContainerButtonWhatsApp, ContainerIconeWhatsApp } from './ButtonWhatsApp.styled';
import ImgWhatsApp from '../../assets/ImgWhatsApp.png';

export const ButtonWhatsApp: FC<IButtonWhatsAppProps> = ({ children }) => {
    return (
        <ContainerButtonWhatsApp>
            <ContainerIconeWhatsApp>
                <img src={ImgWhatsApp} alt="Imagem do Icone do WhatsApp" />
            </ContainerIconeWhatsApp>
            <h3>{children}</h3>
        </ContainerButtonWhatsApp>
    )
};