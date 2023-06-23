import { FC } from 'react';
import { ISimpleCardProps } from './SimpleCard.interface';
import { ContainerSimpleCard, ContainerImgSimpleCard } from './SimpleCard.styled';

export const SimpleCard: FC<ISimpleCardProps> = ({ img, text }) => {
    return (
        <ContainerSimpleCard>
            <ContainerImgSimpleCard>
                <img src={img.url} alt={img.label} />
            </ContainerImgSimpleCard>
            <h3>{text.title}</h3>
            <p>{text.description}</p>
        </ContainerSimpleCard>
    )
};