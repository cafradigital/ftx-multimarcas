import React from 'react';
import ReactFacebookPixel from 'react-facebook-pixel';

export const pageLaunchFunction = (
    setLoading: React.Dispatch<React.SetStateAction<boolean>>,
): void => {
    document.documentElement.style.overflow = 'hidden';

    ReactFacebookPixel.pageView();

    setTimeout(() => {
        document.documentElement.style.overflow = 'auto';
        setLoading(false);
    }, 1100);
};
