import ReactFacebookPixel from 'react-facebook-pixel';
import TagManager from 'react-gtm-module';
import { IInitialViewProps } from './interfaces';

export const pageLaunchFunction = ({
    setLoading,
    initialTags,
    addPageView,
}: IInitialViewProps): void => {
    const loadingApplied = !!setLoading;

    if (loadingApplied) document.documentElement.style.overflow = 'hidden';

    if (initialTags) {
        ReactFacebookPixel.init(initialTags.tagFacebookPixel, undefined, {
            autoConfig: true,
            debug: false,
        });

        TagManager.initialize({ gtmId: initialTags.tagManager });
    }

    if (addPageView) ReactFacebookPixel.pageView();

    if (loadingApplied) {
        setTimeout(() => {
            document.documentElement.style.overflow = 'auto';
            setLoading(false);
        }, 1100);
    }
};
