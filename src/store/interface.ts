import { IconsTypes } from '../views/components/Icon/data';

interface Images {
    url: string;
    label: string;
}

interface ICards {
    texts: {
        title: string;
        description?: string;
    };
    image?: Images;
}

interface IButtons {
    icon?: string;
    texts: {
        title: string;
    };
}

interface ISections {
    texts: {
        title: string;
        subTitle?: string;
        lists?: Array<string>;
    };
    image?: Images;
    button?: IButtons;
    cards: Array<ICards>;
}

interface IFooter {
    theme: 'footer';
    socialNetworks?: {
        icon?: IconsTypes;
        texts: {
            title: string;
            subTitle: string;
        };
    };
}

export interface IDataLadingPage {
    sections: {
        primary: Omit<ISections, 'cards'>;
        second: ISections;
        third?: ISections;
        fourth?: ISections;
        fifth?: ISections;
        sixth?: ISections;
    };
    footer?: IFooter;
}
