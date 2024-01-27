import { type PropsWithChildren } from 'react';
import styled, { keyframes } from 'styled-components';
import * as HoverCardPrimitive from '@radix-ui/react-hover-card';

const slideUpAndFade = keyframes`
  from {
    opacity: 0;
    transform: translateY(2px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const slideRightAndFade = keyframes`
  from {
    opacity: 0;
    transform: translateX(-2px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const slideDownAndFade = keyframes`
  from {
    opacity: 0;
    transform: translateY(-2px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const slideLeftAndFade = keyframes`
  from {
    opacity: 0;
    transform: translateX(2px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const HoverCardPrimitiveRoot = styled(HoverCardPrimitive.Root)``;

const HoverCardPrimitiveTrigger = styled(HoverCardPrimitive.Trigger)``;

const HoverCardPrimitivePortal = styled(HoverCardPrimitive.Portal)``;

const HoverCardPrimitiveContent = styled(HoverCardPrimitive.Content)`
    border-radius: 6px;
    padding: 20px;
    width: 300px;
    background-color: white;
    box-shadow:
        hsl(206 22% 7% / 35%) 0px 10px 38px -10px,
        hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
    animation-duration: 400ms;
    animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
    will-change: transform, opacity;
    &[data-side='top'] {
        animation-name: ${slideDownAndFade};
    }
    &[data-side='right'] {
        animation-name: ${slideLeftAndFade};
    }
    &[data-side='bottom'] {
        animation-name: ${slideUpAndFade};
    }
    &[data-side='left'] {
        animation-name: ${slideRightAndFade};
    }
`;

const HoverCardPrimitiveArrow = styled(HoverCardPrimitive.Arrow)`
    fill: white;
`;

export interface HoverCardProps extends PropsWithChildren {
    trigger: JSX.Element;
}

export function HoverCard(props: HoverCardProps) {
    const { trigger, children } = props;

    return (
        <HoverCardPrimitiveRoot>
            <HoverCardPrimitiveTrigger asChild>
                {trigger}
            </HoverCardPrimitiveTrigger>
            <HoverCardPrimitivePortal>
                <HoverCardPrimitiveContent sideOffset={5}>
                    {children}
                    <HoverCardPrimitiveArrow />
                </HoverCardPrimitiveContent>
            </HoverCardPrimitivePortal>
        </HoverCardPrimitiveRoot>
    );
}
