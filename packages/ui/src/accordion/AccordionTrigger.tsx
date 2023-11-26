import { forwardRef, type ForwardedRef, type PropsWithChildren } from 'react';
import styled from 'styled-components';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { violet, mauve } from '@radix-ui/colors';
import { ChevronDownIcon } from '@radix-ui/react-icons';

const StyledHeader = styled(AccordionPrimitive.Header)`
    all: unset;
    display: flex;
`;

const StyledTrigger = styled(AccordionPrimitive.Trigger)`
    all: unset;
    font-family: inherit;
    background-color: transparent;
    padding: 0px 20px;
    height: 45px;
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 15px;
    line-height: 1;
    color: ${violet.violet11};
    box-shadow: 0 1px 0 ${mauve.mauve6};
    background-color: white;
    :hover {
        background-color: ${mauve.mauve2};
    }
`;

const StyledChevron = styled(ChevronDownIcon)`
    color: ${violet.violet10};
    transition: transform 300ms cubic-bezier(0.87, 0, 0.13, 1);
    &[data-state='open'] {
        transform: rotate(180deg);
    }
`;

function AccordionTrigger(
    props: PropsWithChildren,
    forwardedRef: ForwardedRef<HTMLButtonElement>
): JSX.Element {
    const { children, ...others } = props;

    return (
        <StyledHeader>
            <StyledTrigger
                {...others}
                ref={forwardedRef}>
                {children}
                <StyledChevron aria-hidden />
            </StyledTrigger>
        </StyledHeader>
    );
}

export default forwardRef(AccordionTrigger);
