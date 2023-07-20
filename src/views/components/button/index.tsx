import { FC } from 'react';
import whatsAppIcon from '../../../assets/img/ImgWhatsAppClean-min.webp';
import { ContainerImage } from '../containers/image';
import { IButtonProps } from './intefaces';
import { ButtonContainer } from './styled';

export const Button: FC<IButtonProps> = ({
    children,
    img,
    href,
    backgroundColor,
    border,
    type,
    customStyleds,
    hover,
    justfyContext,
    width,
    text,
    borderRadius,
    padding,
    theme,
}) => {
    return (
        <ButtonContainer
            style={customStyleds}
            styled={{
                type,
                backgroundColor,
                border,
                hover,
                justfyContext,
                width,
                borderRadius,
                padding,
                theme,
                text,
            }}
            href={href}
        >
            {img && type !== 'WhatsApp' ? (
                <ContainerImage
                    customStyleds={img.customStyleds}
                    borderRadius={img.borderRadius}
                    url={img.url}
                    label={img.label}
                    size={img.size}
                />
            ) : (
                type === 'WhatsApp' && (
                    <ContainerImage
                        url={whatsAppIcon}
                        label={'Imagem do WhatsApp'}
                        size={{
                            height: '3.5rem',
                            width: '3.5rem',
                        }}
                    />
                )
            )}
            <h3>{children}</h3>
        </ButtonContainer>
    );
};
