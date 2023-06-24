import React, { FC, useEffect, useState } from 'react';
import { ICardRatingProps } from './CardRating.interface';
import { ContainerCardRating, ContainerImg, ContainerImgCardRating, ContainerStars } from './CardRating.styled';
import ImgGoldStar from '../../assets/img/ImgGoldStar.svg';
import ImgWhiteStar from '../../assets/img/ImgWhiteStar.svg';

export const CardRating: FC<ICardRatingProps> = ({ img, text, Evaluations }) => {

    let goldStart: Array<React.ReactNode> = [];
    let whiteStart: Array<React.ReactNode> = [];

    for (let index = 0; index < Evaluations; index++) {
        goldStart.push(<img src={ImgGoldStar} />);
    };

    for (let index = Evaluations; index < 5; index++) {
        whiteStart.push(<img src={ImgWhiteStar} />);
    };

    return (
        <ContainerCardRating>
            <ContainerImgCardRating>
                <img src={img.url} alt={img.label} />
            </ContainerImgCardRating>
            <ContainerStars>
                {
                    goldStart.map((star, index) => (
                        <ContainerImg key={index} > 
                            {star}
                        </ContainerImg>
                    ))
                }
                {
                    whiteStart.map((star, index) => (
                        <ContainerImg key={index} >
                            {star}
                        </ContainerImg>
                    ))
                }
            </ContainerStars>
            <h3>{text.title}</h3>
            <p>{text.description}</p>
        </ContainerCardRating>
    )
};