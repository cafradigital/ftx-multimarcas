type Theme = 'primary' | 'secondary' | 'third' | 'none';

export interface IDataLadingPageProps {
    primarySection: {
        theme: Theme;
        image: {
            url: string;
            label: string;
        };
        texts: {
            title: string;
            subTitle: string;
        };
    };
    secondarySection: {
        theme: Theme;
        texts: {
            title: string;
            subTitle: string;
        };
        cards: Array<{
            title: string;
            img: {
                url: string;
                label: string;
            };
        }>;
    };
}
