import { FC } from 'react';
import { ICardRatingProps } from './CardRating.interface';
import { ContainerCardRating, ContainerImgCardRating } from './CardRating.styled';

export const CardRating: FC<ICardRatingProps> = ({ img, text }) => {
    return (
        <ContainerCardRating>
            <ContainerImgCardRating>
                <img src={img.url} alt={img.label} />
            </ContainerImgCardRating>
            <h3>{text.title}</h3>
            <p>{text.description}</p>
        </ContainerCardRating>
    )
};