import React from 'react';
import { IContainerImageProps } from './interfaces';
import { ImageContainer } from './styled';

export const ContainerImage: React.FC<IContainerImageProps> = ({
    children,
    borderRadius,
    customStyled,
    url,
    imageRepeat,
    typeAdaptation,
    align,
}) => {
    return (
        <ImageContainer
            imageUrl={url}
            style={customStyled}
            styled={{
                borderRadius,
                imageRepeat,
                typeAdaptation,
                align,
            }}
        >
            {children}
        </ImageContainer>
    );
};
