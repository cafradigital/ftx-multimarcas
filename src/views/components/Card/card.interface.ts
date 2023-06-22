import React from 'react';

export interface ICardProps {
    img: {
        url: string;
        label: string;
    };
    children: React.ReactNode;
};