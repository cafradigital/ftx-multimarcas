import React from 'react';

export interface ILeafCardStyleds {
    theme: 'primary' | 'secondary' | 'third' | 'none';
    size: 'small' | 'medium' | 'large';
    colorShadown?: string;
}

export interface ICardLeafProps extends ILeafCardStyleds {
    img: {
        url: string;
        label: string;
        customStyleds?: React.CSSProperties;
    };
    title: string;
    customStyleds?: React.CSSProperties;
}
