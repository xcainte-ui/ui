import { forwardRef, type ForwardedRef, type PropsWithChildren } from 'react';
import styled, { keyframes } from 'styled-components';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { mauve } from '@radix-ui/colors';

const slideDown = keyframes`
    from { height: 0 }
    to { height: var(--radix-accordion-content-height) }
`;

const slideUp = keyframes`
    from { height: var(--radix-accordion-content-height) }
    to { height: 0 }
`;

const StyledContent = styled(AccordionPrimitive.Content)`
    overflow: hidden;
    font-size: 16px;
    color: ${mauve.mauve11};
    background-color: ${mauve.mauve2};

    &[data-state='open'] {
        animation: ${slideDown} 300ms cubic-bezier(0.87, 0, 0.13, 1);
    }
    &[data-state='closed'] {
        animation: ${slideUp} 300ms cubic-bezier(0.87, 0, 0.13, 1);
    }
`;

const StyledContentText = styled.div`
    padding: 16px 20px;
`;

function AccordionContent(
    props: PropsWithChildren,
    forwardedRef: ForwardedRef<HTMLDivElement>
): JSX.Element {
    const { children, ...others } = props;

    return (
        <StyledContent
            {...others}
            ref={forwardedRef}>
            <StyledContentText>{children}</StyledContentText>
        </StyledContent>
    );
}

export default forwardRef(AccordionContent);
