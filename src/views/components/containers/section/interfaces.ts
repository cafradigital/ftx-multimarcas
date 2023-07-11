import { IContainerProps } from '../interfaces';

export interface ISectionStyleds {
    height?: 'full' | 'auto';
    padding?:
        | 'auto'
        | 'full-edges'
        | 'side-edges'
        | 'top-and-bottom-edges'
        | 'none';
    backgroundColor?: 'primary' | 'secondary' | 'third';
    align?: {
        direction?: 'column' | 'row' | 'column-reverse' | 'row-reverse';
        'justify-content': 'center' | 'flex-end' | 'flex-start';
        'align-items':
            | 'center'
            | 'space-between'
            | 'space-around'
            | 'flex-end'
            | 'flex-start';
    };
}

export interface ISectionProps extends ISectionStyleds, IContainerProps {
    customStyleds?: React.CSSProperties;
}
