import React from 'react';
import { IContainerComponentProps } from './interfaces';
import { StyledContainer } from './styled';

export const Container: React.FC<IContainerComponentProps> = ({
    children,
    customStyleds,
    styled,
}) => {
    return (
        <StyledContainer style={customStyleds} styled={styled}>
            {children}
        </StyledContainer>
    );
};
