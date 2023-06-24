import React from "react";

export interface ICardRatingProps {
    img: {
        url: string;
        label: string;
    };
    text: {
        title: string;
        description?: string;
    };
    Evaluations: 0 | 1 | 2 | 3 | 4 | 5;
};

export interface IStartsState {
    goldStart?: Array<React.ReactNode>;
    whiteStar?: Array<React.ReactNode>;
}