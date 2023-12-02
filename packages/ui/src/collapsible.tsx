import styled, { keyframes } from 'styled-components';
import * as CollapsiblePrimitive from '@radix-ui/react-collapsible';
import { RowSpacingIcon, Cross2Icon } from '@radix-ui/react-icons';
import { blackA, violet } from '@radix-ui/colors';

const slideDown = keyframes`
    from { height: 0 }
    to { height: var(--radix-collapsible-content-height) }
`;

const slideUp = keyframes`
    from { height: var(--radix-collapsible-content-height) }
    to { height: 0 }
`;

const CollapsibleRoot = styled(CollapsiblePrimitive.Root)`
    button {
        all: unset;
    }

    width: 320px;
    padding: 8px;
    border: 1px solid ${blackA.blackA4};
    border-radius: 8px;
`;

const CollapsibleTriggerContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const CollapsibleTrigger = styled(CollapsiblePrimitive.CollapsibleTrigger)``;

const CollapsibleContent = styled(CollapsiblePrimitive.CollapsibleContent)`
    &[data-state='open'] {
        animation: ${slideDown} 300ms cubic-bezier(0.87, 0, 0.13, 1);
    }
    &[data-state='closed'] {
        animation: ${slideUp} 300ms cubic-bezier(0.87, 0, 0.13, 1);
    }
`;

const IconButton = styled.button`
    font-family: inherit;
    border-radius: 100%;
    height: 25px;
    width: 25px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    color: var(--violet-11);
    box-shadow: 0 2px 10px ${blackA.blackA7};

    &[data-state='open'] {
        background-color: ${violet.violet3};
    }
    &[data-state='closed'] {
        background-color: white;
    }

    &:hover {
        background-color: ${violet.violet3};
    }
    &:focus {
        box-shadow: 0 0 0 2px black;
    }
`;

const Text = styled.span`
    color: ${violet.violet11};
    font-size: 15px;
    line-height: 25px;
`;

const CollapsibleItemContainer = styled.div`
    padding: 8px;
    cursor: pointer;
    border-radius: 4px;
    background-color: white;
    &:hover {
        background-color: ${blackA.blackA2};
    }
    transition: background-color 0.2s ease-in-out;
`;

export interface CollapsibleProps
    extends CollapsiblePrimitive.CollapsibleProps {
    title: string;
    items: string[];
}

export function Collapsible(props: CollapsibleProps) {
    const { title, items, open: isOpen, onOpenChange, ...others } = props;

    return (
        <CollapsibleRoot
            // open={isOpen}
            // onOpenChange={onOpenChange}
            {...others}>
            <CollapsibleTriggerContainer>
                <Text>{title}</Text>

                <CollapsibleTrigger>
                    <IconButton>
                        {isOpen ? <Cross2Icon /> : <RowSpacingIcon />}
                    </IconButton>
                </CollapsibleTrigger>
            </CollapsibleTriggerContainer>

            <CollapsibleContent>
                {items.map((item, index) => {
                    return (
                        <CollapsibleItemContainer key={index}>
                            <Text>{item}</Text>
                        </CollapsibleItemContainer>
                    );
                })}
            </CollapsibleContent>
        </CollapsibleRoot>
    );
}
