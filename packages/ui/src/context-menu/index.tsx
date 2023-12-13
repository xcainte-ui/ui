import styled, { type StyledObject } from 'styled-components';
import * as ContextMenuPrimitive from '@radix-ui/react-context-menu';
import { mauve, violet } from '@radix-ui/colors';

export const ContextMenuRoot = styled(ContextMenuPrimitive.Root)``;
export const ContextMenuSub = styled(ContextMenuPrimitive.Sub)``;

export const ContextMenuTrigger = styled(ContextMenuPrimitive.Trigger)`
    display: block;
    border: 2px black dashed;
    color: black;
    border-radius: 4px;
    font-size: 15px;
    user-select: none;
    padding: 45px 0;
    width: 300px;
    text-align: center;
`;

export const ContextMenuPortal = styled(ContextMenuPrimitive.Portal)``;

const contentStyles = {
    minWidth: 220,
    backgroundColor: 'white',
    borderRadius: 6,
    overflow: 'hidden',
    padding: 5,
    boxShadow:
        '0px 10px 38px -10px rgba(22, 23, 24, 0.35), 0px 10px 20px -15px rgba(22, 23, 24, 0.2)',
};

export const ContextMenuContent: typeof ContextMenuPrimitive.Content = styled(
    ContextMenuPrimitive.Content
)(contentStyles);
export const ContextMenuSubContent: typeof ContextMenuPrimitive.SubContent =
    styled(ContextMenuPrimitive.SubContent)(contentStyles);

const itemStyles: StyledObject = {
    fontSize: 13,
    lineHeight: 1,
    color: violet.violet11,
    borderRadius: 3,
    display: 'flex',
    alignItems: 'center',
    height: 25,
    padding: '0 5px',
    // position: 'relative',
    paddingLeft: 25,
    userSelect: 'none',
    outline: 'none',

    '&[data-disabled]': {
        color: mauve.mauve8,
        pointerEvents: 'none',
    },

    '&[data-highlighted]': {
        backgroundColor: violet.violet9,
        color: violet.violet1,
    },
};

export const ContextMenuItem = styled(ContextMenuPrimitive.Item)(itemStyles);
export const ContextMenuCheckboxItem = styled(
    ContextMenuPrimitive.CheckboxItem
)(itemStyles);
export const ContextMenuRadioGroup = styled(ContextMenuPrimitive.RadioGroup)``;
export const ContextMenuRadioItem = styled(ContextMenuPrimitive.RadioItem)(
    itemStyles
);
export const ContextMenuSubTrigger = styled(ContextMenuPrimitive.SubTrigger)(
    (props) => ({
        '&[data-state="open"]': {
            backgroundColor: violet.violet4,
            color: violet.violet11,
        },
        ...itemStyles,
    })
);

export const ContextMenuLabel = styled(ContextMenuPrimitive.Label)`
    padding-left: 25px;
    font-size: 12px;
    line-height: 25px;
    color: var(--mauve-11);
`;

export const ContextMenuSeparator = styled(ContextMenuPrimitive.Separator)`
    height: 1px;
    background-color: var(--violet-6);
    margin: 5px;
`;

export const ContextMenuItemIndicator = styled(
    ContextMenuPrimitive.ItemIndicator
)`
    position: absolute;
    left: 0;
    width: 25px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
`;
