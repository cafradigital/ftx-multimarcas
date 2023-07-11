import React from 'react';
import { IconsTypes } from './data';

export interface IConStyledProps {
    cursor?: 'pointer' | 'initial';
    size?: '1x' | '2x' | '3x' | '4x' | '5x' | '6x' | '7x' | '8x' | '9x' | '10x';
    color?: string;
}

export interface IconProps extends IConStyledProps {
    icon: IconsTypes;
    customStyleds?: React.CSSProperties;
    handleClick?: () => void;
}
