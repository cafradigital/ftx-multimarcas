import { IContainerProps, IStyledsContainer } from '../interfaces';

export interface ISectionStyleds extends IStyledsContainer {
    height?:
        | 'full'
        | 'auto'
        | '5vh'
        | '10vh'
        | '15vh'
        | '20vh'
        | '25vh'
        | '30vh'
        | '35vh'
        | '40vh'
        | '45vh'
        | '50vh'
        | '55vh'
        | '60vh'
        | '65vh'
        | '70vh'
        | '75vh'
        | '80vh'
        | '85vh'
        | '90vh'
        | '95vh';
    padding?:
        | 'auto'
        | 'full-edges'
        | 'side-edges'
        | 'top-and-bottom-edges'
        | 'none';
    backgroundColor?: 'primary' | 'secondary' | 'third' | 'none';
}

export interface ISectionProps extends ISectionStyleds, IContainerProps {
    customStyleds?: React.CSSProperties;
}
