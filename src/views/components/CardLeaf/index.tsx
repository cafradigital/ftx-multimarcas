import { FC } from 'react';
import { ICardLeafProps } from './CardLeaf.interface';
import { ContainerCardLeaf, ContainerImgCardLeaf } from './CardLeaf.styled';

export const CardLeaf: FC<ICardLeafProps> = ({ img, children }) => {
    return (
        <ContainerCardLeaf>
            <ContainerImgCardLeaf>
                <img src={img.url} alt={img.label} />
            </ContainerImgCardLeaf>
            <h2>{children}</h2>
        </ContainerCardLeaf>
    )
};