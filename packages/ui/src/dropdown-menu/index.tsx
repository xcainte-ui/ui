import styled, { keyframes } from 'styled-components';
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import { mauve, violet } from '@radix-ui/colors';

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

export const DropdownMenuRoot = styled(DropdownMenuPrimitive.Root)``;

export const DropdownMenuTrigger = styled(DropdownMenuPrimitive.Trigger)``;

export const DropdownMenuPortal = styled(DropdownMenuPrimitive.Portal)``;

export const DropdownMenuContent = styled(DropdownMenuPrimitive.Content)`
    min-width: 220px;
    background-color: white;
    border-radius: 6px;
    padding: 5px;
    box-shadow:
        0px 10px 38px -10px rgba(22, 23, 24, 0.35),
        0px 10px 20px -15px rgba(22, 23, 24, 0.2);
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

export const DropdownMenuSub = styled(DropdownMenuPrimitive.Sub)``;

// prettier-ignore
export const DropdownMenuSubContent = styled(DropdownMenuPrimitive.SubContent)`
    min-width: 220px;
    background-color: white;
    border-radius: 6px;
    padding: 5px;
    box-shadow:
        0px 10px 38px -10px rgba(22, 23, 24, 0.35),
        0px 10px 20px -15px rgba(22, 23, 24, 0.2);
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

export const DropdownMenuItem = styled(DropdownMenuPrimitive.Item)`
    font-size: 13px;
    line-height: 1;
    color: ${violet.violet11};
    border-radius: 3px;
    display: flex;
    align-items: center;
    height: 25px;
    padding: 0 5px;
    position: relative;
    padding-left: 25px;
    user-select: none;
    outline: none;
    &[data-disabled] {
        color: ${mauve.mauve8};
        pointer-events: none;
    }
    &[data-highlighted] {
        background-color: ${violet.violet9};
        color: ${violet.violet1};
    }
`;

// prettier-ignore
export const DropdownMenuCheckboxItem = styled(DropdownMenuPrimitive.CheckboxItem)`
    font-size: 13px;
    line-height: 1;
    color: ${violet.violet11};
    border-radius: 3px;
    display: flex;
    align-items: center;
    height: 25px;
    padding: 0 5px;
    position: relative;
    padding-left: 25px;
    user-select: none;
    outline: none;
    &[data-disabled] {
        color: ${mauve.mauve8};
        pointer-events: none;
    }
    &[data-highlighted] {
        background-color: ${violet.violet9};
        color: ${violet.violet1};
    }
`;

export const DropdownMenuRadioGroup = styled(
    DropdownMenuPrimitive.RadioGroup
)``;

export const DropdownMenuRadioItem = styled(DropdownMenuPrimitive.RadioItem)`
    font-size: 13px;
    line-height: 1;
    color: ${violet.violet11};
    border-radius: 3px;
    display: flex;
    align-items: center;
    height: 25px;
    padding: 0 5px;
    position: relative;
    padding-left: 25px;
    user-select: none;
    outline: none;
    &[data-disabled] {
        color: ${mauve.mauve8};
        pointer-events: none;
    }
    &[data-highlighted] {
        background-color: ${violet.violet9};
        color: ${violet.violet1};
    }
`;

export const DropdownMenuSubTrigger = styled(DropdownMenuPrimitive.SubTrigger)`
    font-size: 13px;
    line-height: 1;
    color: ${violet.violet11};
    border-radius: 3px;
    display: flex;
    align-items: center;
    height: 25px;
    padding: 0 5px;
    position: relative;
    padding-left: 25px;
    user-select: none;
    outline: none;
    &[data-state='open'] {
        background-color: ${violet.violet4};
        color: ${violet.violet11};
    }
    &[data-disabled] {
        color: ${mauve.mauve8};
        pointer-events: none;
    }
    &[data-highlighted] {
        background-color: ${violet.violet9};
        color: ${violet.violet1};
    }
`;

export const DropdownMenuLabel = styled(DropdownMenuPrimitive.Label)`
    padding-left: 25px;
    font-size: 12px;
    line-height: 25px;
    color: ${mauve.mauve11};
`;

export const DropdownMenuSeparator = styled(DropdownMenuPrimitive.Separator)`
    height: 1px;
    background-color: ${violet.violet6};
    margin: 5px;
`;

// prettier-ignore
export const DropdownMenuItemIndicator = styled(DropdownMenuPrimitive.ItemIndicator)`
    position: absolute;
    left: 0;
    width: 25px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
`;

export const DropdownMenuArrow = styled(DropdownMenuPrimitive.Arrow)`
    fill: white;
`;
