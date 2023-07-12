import { FC } from 'react';
import { ISectionProps } from './interfaces';
import { SectionContainer } from './styled';

export * from './header';

export const Section: FC<ISectionProps> = ({
    children,
    customStyleds,
    height = 'auto',
    padding = 'auto',
    backgroundColor = 'primary',
    align,
}) => {
    return (
        <SectionContainer
            style={customStyleds}
            styled={{ height, padding, backgroundColor, align }}
        >
            {children}
        </SectionContainer>
    );
};
