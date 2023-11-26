import styled from 'styled-components';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { blackA, mauve } from '@radix-ui/colors';
import AccordionTrigger from './AccordionTrigger';
import AccordionContent from './AccordionContent';

const AccordionRoot = styled(AccordionPrimitive.Root)`
    border-radius: 6;
    width: 300;
    background-color: ${mauve.mauve6};
    box-shadow: 0 2px 10px ${blackA.blackA2};
`;

const AccordionItem = styled(AccordionPrimitive.Item)`
    overflow: hidden;
    margin-top: 1;

    :first-child {
        margin-top: 0;
        border-top-left-radius: 4;
        border-top-right-radius: 4;
    }

    :last-child {
        border-bottom-left-radius: 4;
        border-bottom-right-radius: 4;
    }

    :focus-within {
        position: relative;
        z-index: 1;
        box-shadow: 0 0 0 2px ${mauve.mauve12};
    }
`;

export interface AccordionItem {
    title: string;
    children: string | JSX.Element;
}

export interface AccordionProps {
    items: AccordionItem[];
}

export function Accordion(props: AccordionProps): JSX.Element {
    const { items } = props;
    console.log(props);

    return (
        <AccordionRoot
            type='single'
            defaultValue='accordion-item-1'
            collapsible>
            {items.map((item, index) => {
                return (
                    <AccordionItem
                        key={index}
                        value={`accordion-item-${index + 1}`}>
                        <AccordionTrigger>{item.title}</AccordionTrigger>
                        <AccordionContent>{item.children}</AccordionContent>
                    </AccordionItem>
                );
            })}
        </AccordionRoot>
    );
}
