import { FC } from 'react';
import { ICardProps } from './card.interface';
import { ContainerCard, ContainerImgCard } from './card.styled';

export const Card: FC<ICardProps> = ({ img, children }) => {
    return (
        <ContainerCard>
            <ContainerImgCard>
                <img src={img.url} alt={img.label} />
            </ContainerImgCard>
            <h3>{children}</h3>
        </ContainerCard>
    )
};