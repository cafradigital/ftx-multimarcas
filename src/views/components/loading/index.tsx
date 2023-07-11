import React from 'react';

import {
    LoadingFive,
    LoadingFour,
    LoadingOne,
    LoadingThree,
    LoadingTwo,
} from './components';
import { ContainerLoading } from './styled';

export interface ILoadingStyleds {
    size: 'small' | 'medium' | 'big';
    color?: string;
    backgroundColor?: string;
}

export interface ILoadingProps extends ILoadingStyleds {
    type: 'one' | 'two' | 'three' | 'four' | 'five';
}

export const Loading: React.FC<ILoadingProps> = ({
    type,
    size,
    color,
    backgroundColor,
}) => {
    const Types = {
        one: <LoadingOne size={size} color={color} />,
        two: <LoadingTwo size={size} color={color} />,
        three: <LoadingThree size={size} color={color} />,
        four: <LoadingFour size={size} color={color} />,
        five: <LoadingFive size={size} color={color} />,
    };

    return (
        <ContainerLoading backgroundColor={backgroundColor}>
            {Types[type]}
        </ContainerLoading>
    );
};
