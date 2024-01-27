import styled from 'styled-components';
import * as AvatarPrimitive from '@radix-ui/react-avatar';
import { violet, blackA } from '@radix-ui/colors';

const AvatarRoot = styled(AvatarPrimitive.Root)`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    vertical-align: middle;
    overflow: hidden;
    user-select: none;
    width: 45px;
    height: 45px;
    border-radius: 100%;
    background-color: ${blackA.blackA3};
`;

const AvatarImage = styled(AvatarPrimitive.Image)`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: inherit;
`;

const AvatarFallback = styled(AvatarPrimitive.Fallback)`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
    color: ${violet.violet11};
    font-size: 15px;
    line-height: 1;
    font-weight: 500;
`;

export interface AvatarProps extends AvatarPrimitive.AvatarProps {
    src: string;
    alt: string;
    imageProps?: Omit<AvatarPrimitive.AvatarImageProps, 'src' | 'alt'>;
    fallback: string | JSX.Element;
    fallbackProps?: AvatarPrimitive.AvatarFallbackProps;
}

export function Avatar(props: AvatarProps): JSX.Element {
    const { src, alt, imageProps, fallbackProps, fallback } = props;

    return (
        <AvatarRoot>
            <AvatarImage
                src={src}
                alt={alt}
                {...imageProps}
            />
            <AvatarFallback
                delayMs={600}
                {...fallbackProps}>
                {fallback}
            </AvatarFallback>
        </AvatarRoot>
    );
}
