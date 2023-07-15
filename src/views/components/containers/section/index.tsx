import { FC } from 'react';
import { ISectionProps } from './interfaces';
import { SectionContainer } from './styled';

export * from './header';

export const Section: FC<ISectionProps> = ({
    children,
    customStyleds,
    styled
}) => {
    return (
        <SectionContainer
            style={customStyleds}
            styled={styled}
        >
            {children}
        </SectionContainer>
    );
};
