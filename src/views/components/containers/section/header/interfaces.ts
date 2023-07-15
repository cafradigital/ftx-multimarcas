import React from 'react';

export interface IHeaderSectionStyled {
    theme: 'primary' | 'secondary' | 'third' | 'none';
    customStyleds?: React.CSSProperties;
}

export interface IHeaderSectionProps extends IHeaderSectionStyled {
    title: string;
    subTitle?: string;
}
