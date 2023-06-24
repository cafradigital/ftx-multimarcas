import { FC } from 'react';
import { IButtonProps } from './Button.interface';
import { ContainerButton, ContainerIconeWhatsApp } from './Button.styled';

export const Button: FC<IButtonProps> = ({ children, img, eventClick }) => {
    return (
        <ContainerButton onClick={eventClick} >
            {
                img ? 
                    <ContainerIconeWhatsApp>
                        <img src={img.url} alt={img.label} />
                    </ContainerIconeWhatsApp>
                    :
                ''
            }
            <h3>{children}</h3>
        </ContainerButton>
    )
};