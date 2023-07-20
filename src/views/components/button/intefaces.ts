import React from 'react';
import { IThemes } from '../../../GlobalInterfaces';
import { IContainerImageProps } from '../containers/image/containerImage/interface';

export interface IButtonStyleds {
    theme?: IThemes;
    width?: string;
    padding?: string;
    borderRadius?: string;
    justfyContext?:
        | 'space-evenly'
        | 'space-between'
        | 'space-around'
        | 'center'
        | 'flex-start'
        | 'flex-end';
    text?: {
        fontSize: string;
        color: string;
    };
    backgroundColor?: string;
    border?: string;
    hover?: {
        border: string;
        backgroundColor: string;
        text: {
            color: string;
        };
    };
    type: 'WhatsApp' | 'SiteTheme' | 'Custom';
}

export interface IButtonProps extends IButtonStyleds {
    children: React.ReactNode;
    customStyleds?: React.CSSProperties;
    href: string;
    img?: IContainerImageProps;
}
