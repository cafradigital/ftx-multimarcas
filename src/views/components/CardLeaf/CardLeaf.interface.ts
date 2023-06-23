import React from 'react';

export interface ICardLeafProps {
    img: {
        url: string;
        label: string;
    };
    children: React.ReactNode;
};