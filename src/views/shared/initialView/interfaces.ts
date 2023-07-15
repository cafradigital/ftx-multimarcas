export interface IInitialViewProps {
    setLoading?: React.Dispatch<React.SetStateAction<boolean>>;
    initialTags?: {
        tagFacebookPixel: string;
        tagManager: string;
    };
    addPageView?: boolean;
}
