import { type PropsWithChildren } from 'react';
import * as AspectRatioPrimitive from '@radix-ui/react-aspect-ratio';

export interface AspectRatioProps extends PropsWithChildren {
    ratio: number;
}

export function AspectRatio(props: AspectRatioProps) {
    const { ratio } = props;

    return (
        <AspectRatioPrimitive.Root ratio={ratio}>
            {props.children}
        </AspectRatioPrimitive.Root>
    );
}
