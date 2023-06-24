import React from "react";

export interface IButtonProps {
    children: React.ReactNode;
    img?: {
        label: string;
        url: string;
    }
    eventClick: () => void;
};