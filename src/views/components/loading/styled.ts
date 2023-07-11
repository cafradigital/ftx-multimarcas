import styled from 'styled-components';

export const ContainerLoading = styled.div<{
    backgroundColor?: string;
}>`
    background-color: ${({ backgroundColor }) =>
        backgroundColor || '#00000080'};

    width: 100%;
    height: 100vh;

    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    z-index: 999;
`;
