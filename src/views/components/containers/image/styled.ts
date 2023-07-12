import styled from 'styled-components';
import { IContainerImageStyled } from './interfaces';

export const ImageContainer = styled.image<{
    styled: IContainerImageStyled;
    imageUrl: string;
}>`
    width: 100%;
    height: 100%;

    text-align: ${({ styled }) =>
        styled.align?.textAlign ? styled.align?.textAlign : 'initial'};

    display: flex;

    gap: ${({ styled }) => (styled.align?.gap ? styled.align?.gap : '')};

    flex-wrap: ${({ styled }) =>
        styled.align?.wrap ? styled.align?.wrap : 'wrap'};

    flex-direction: ${({ styled }) =>
        styled.align?.direction ? styled.align?.direction : 'row'};

    align-items: ${({ styled }) =>
        styled.align?.['align-items']
            ? styled.align?.['align-items']
            : 'initial'};

    justify-content: ${({ styled }) =>
        styled.align?.['justify-content']
            ? styled.align?.['justify-content']
            : 'initial'};

    background-image: ${({ imageUrl }) => `url(${imageUrl})`};
    background-position: center;
    background-size: ${({ styled }) =>
        styled.typeAdaptation ? styled.typeAdaptation : 'contain'};
    background-repeat: ${({ styled }) =>
        styled.imageRepeat ? styled.imageRepeat : 'no-repeat'};
`;
