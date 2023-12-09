import { type PropsWithChildren } from 'react';
import styled, { keyframes } from 'styled-components';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { Cross2Icon } from '@radix-ui/react-icons';
import { mauve, violet } from '@radix-ui/colors';

const overlayShow = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const contentShow = keyframes`
  from {
    opacity: 0;
    transform: translate(-50%, -48%) scale(0.96);
  }
  to {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
`;

export const DialogRoot = styled(DialogPrimitive.Root)``;

export const DialogTrigger = styled(DialogPrimitive.Trigger)``;

const DialogOverlay = styled(DialogPrimitive.Overlay)`
    background-color: var(--black-a9);
    position: fixed;
    inset: 0;
    animation: ${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1);
`;

const DialogContent = styled(DialogPrimitive.Content)`
    background-color: white;
    border-radius: 6px;
    box-shadow:
        hsl(206 22% 7% / 35%) 0px 10px 38px -10px,
        hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 90vw;
    max-width: 450px;
    max-height: 85vh;
    padding: 25px;
    animation: ${contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1);

    :focus {
        outline: none;
    }
`;

export const DialogTitle = styled(DialogPrimitive.Title)`
    margin: 0;
    font-weight: 500;
    color: ${mauve.mauve12};
    font-size: 17px;
`;

export const DialogDescription = styled(DialogPrimitive.Description)`
    margin: 10px 0 20px;
    color: ${mauve.mauve11};
    font-size: 15px;
    line-height: 1.5;
`;

export const DialogBody = styled.div``;

export function DialogFooter(props: PropsWithChildren) {
    return (
        <div
            style={{
                display: 'flex',
                marginTop: 24,
                justifyContent: 'flex-end',
            }}>
            <DialogPrimitive.Close asChild>
                {props.children}
            </DialogPrimitive.Close>
        </div>
    );
}

const IconButton = styled.button`
    all: unset;
    font-family: inherit;
    border-radius: 100%;
    height: 25px;
    width: 25px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    color: ${violet.violet11};
    position: absolute;
    top: 10px;
    right: 10px;
    :hover {
        background-color: ${violet.violet4};
    }
    :focus {
        box-shadow: 0 0 0 2px ${violet.violet7};
    }
`;

export function DialogPortal(props: PropsWithChildren) {
    return (
        <DialogPrimitive.Portal>
            <DialogOverlay />

            <DialogContent>
                {props.children}

                <DialogPrimitive.Close asChild>
                    <IconButton aria-label='Close'>
                        <Cross2Icon />
                    </IconButton>
                </DialogPrimitive.Close>
            </DialogContent>
        </DialogPrimitive.Portal>
    );
}
