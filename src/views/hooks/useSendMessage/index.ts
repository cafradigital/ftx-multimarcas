import { IPropsUseSendMessageWhatsApp } from "./useSendMessage.interface";

export const useSendMessage = () => {
    
    const sendMessageWhatsApp = ({ message, phoneNumber }: IPropsUseSendMessageWhatsApp) => {
      
        const userAgent = navigator.userAgent.toLowerCase();
        
        if( userAgent.search(/(android|avantgo|blackberry|bolt|boost|cricket|docomo|fone|hiptop|mini|mobi|palm|phone|pie|tablet|up\.browser|up\.link|webos|wos)/i)!= -1 ){
            window.open(`http://api.whatsapp.com/send/?text=${message ? message : ''}${ !!phoneNumber ? `&phone=${phoneNumber}` : ''}`);
        } else {
            window.open(`http://web.whatsapp.com/send/?text=${message ? message : ''}${ !!phoneNumber ? `&phone=${phoneNumber}` : ''}`);
        };
    };
    
    return {
        sendMessageWhatsApp
    };

};