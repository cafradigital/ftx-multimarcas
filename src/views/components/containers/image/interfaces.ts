import React from 'react';
import { IStyledsContainer } from '../interfaces';

export interface IContainerImageStyled extends IStyledsContainer {
    borderRadius?: string;
    typeAdaptation?: 'contain' | 'cover' | 'auto';
    imageRepeat?: 'repeat' | 'repeat-x' | 'repeat-y' | 'no-repeat';
}

export interface IContainerImageProps extends IContainerImageStyled {
    children?: React.ReactNode;
    customStyled?: React.CSSProperties;
    url: string;
}
