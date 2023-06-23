export interface ISimpleCardProps {
    img: {
        url: string;
        label: string;
    };
    text: {
        title: string;
        description?: string;
    }
};