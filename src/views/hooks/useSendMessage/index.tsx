import { IPropsUseSendMessageWhatsApp } from "./useSendMessage.interface";

export const useSendMessage = () => {
    
    const sendMessageWhatsApp = ({ message, phoneNumber }: IPropsUseSendMessageWhatsApp) => {
        window.open(`http://web.whatsapp.com/send/?text=${message ? message : ''}${ !!phoneNumber ? `&phone=${phoneNumber}` : ''}`);
    };
    
    return {
        sendMessageWhatsApp
    };

};