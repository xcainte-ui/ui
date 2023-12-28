import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import styled from 'styled-components';
import {
    HamburgerMenuIcon,
    DotFilledIcon,
    CheckIcon,
    ChevronRightIcon,
} from '@radix-ui/react-icons';
import { blackA, mauve, violet } from '@radix-ui/colors';
import {
    DropdownMenuRoot,
    DropdownMenuTrigger,
    DropdownMenuPortal,
    DropdownMenuContent,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuItem,
    DropdownMenuCheckboxItem,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuSubTrigger,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuItemIndicator,
    DropdownMenuArrow,
} from '@acme/ui';

const IconButton = styled.button`
    all: unset;
    font-family: inherit;
    border-radius: 100%;
    height: 35px;
    width: 35px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    color: var(--violet-11);
    background-color: white;
    box-shadow: 0 2px 10px ${blackA.blackA7};
    :hover {
        background-color: ${violet.violet3};
    }
    :focus {
        box-shadow: 0 0 0 2px black;
    }
`;

const RightSlot = styled.div`
    margin-left: auto;
    padding-left: 20px;
    color: var(--mauve-11);
    &[data-highlighted] > .RightSlot {
        color: white;
    }
    &[data-disabled] .RightSlot {
        color: ${mauve.mauve8};
    }
`;

function SampleDropdownMenu(): JSX.Element {
    const [bookmarksChecked, setBookmarksChecked] = useState(true);
    const [urlsChecked, setUrlsChecked] = useState(false);
    const [person, setPerson] = useState('pedro');

    return (
        <DropdownMenuRoot>
            <DropdownMenuTrigger asChild>
                <button
                    className='IconButton'
                    aria-label='Customise options'>
                    <HamburgerMenuIcon />
                </button>
            </DropdownMenuTrigger>

            <DropdownMenuPortal>
                <DropdownMenuContent
                    className='DropdownMenuContent'
                    sideOffset={5}>
                    <DropdownMenuItem className='DropdownMenuItem'>
                        New Tab <RightSlot>⌘+T</RightSlot>
                    </DropdownMenuItem>
                    <DropdownMenuItem className='DropdownMenuItem'>
                        New Window <RightSlot>⌘+N</RightSlot>
                    </DropdownMenuItem>
                    <DropdownMenuItem
                        className='DropdownMenuItem'
                        disabled>
                        New Private Window <RightSlot>⇧+⌘+N</RightSlot>
                    </DropdownMenuItem>
                    <DropdownMenuSub>
                        <DropdownMenuSubTrigger className='DropdownMenuSubTrigger'>
                            More Tools
                            <RightSlot>
                                <ChevronRightIcon />
                            </RightSlot>
                        </DropdownMenuSubTrigger>
                        <DropdownMenuPortal>
                            <DropdownMenuSubContent
                                className='DropdownMenuSubContent'
                                sideOffset={2}
                                alignOffset={-5}>
                                <DropdownMenuItem className='DropdownMenuItem'>
                                    Save Page As… <RightSlot>⌘+S</RightSlot>
                                </DropdownMenuItem>
                                <DropdownMenuItem className='DropdownMenuItem'>
                                    Create Shortcut…
                                </DropdownMenuItem>
                                <DropdownMenuItem className='DropdownMenuItem'>
                                    Name Window…
                                </DropdownMenuItem>
                                <DropdownMenuSeparator className='DropdownMenuSeparator' />
                                <DropdownMenuItem className='DropdownMenuItem'>
                                    Developer Tools
                                </DropdownMenuItem>
                            </DropdownMenuSubContent>
                        </DropdownMenuPortal>
                    </DropdownMenuSub>

                    <DropdownMenuSeparator className='DropdownMenuSeparator' />

                    <DropdownMenuCheckboxItem
                        className='DropdownMenuCheckboxItem'
                        checked={bookmarksChecked}
                        onCheckedChange={setBookmarksChecked}>
                        <DropdownMenuItemIndicator className='DropdownMenuItemIndicator'>
                            <CheckIcon />
                        </DropdownMenuItemIndicator>
                        Show Bookmarks <RightSlot>⌘+B</RightSlot>
                    </DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem
                        className='DropdownMenuCheckboxItem'
                        checked={urlsChecked}
                        onCheckedChange={setUrlsChecked}>
                        <DropdownMenuItemIndicator className='DropdownMenuItemIndicator'>
                            <CheckIcon />
                        </DropdownMenuItemIndicator>
                        Show Full URLs
                    </DropdownMenuCheckboxItem>

                    <DropdownMenuSeparator className='DropdownMenuSeparator' />

                    <DropdownMenuLabel className='DropdownMenuLabel'>
                        People
                    </DropdownMenuLabel>
                    <DropdownMenuRadioGroup
                        value={person}
                        onValueChange={setPerson}>
                        <DropdownMenuRadioItem
                            className='DropdownMenuRadioItem'
                            value='pedro'>
                            <DropdownMenuItemIndicator className='DropdownMenuItemIndicator'>
                                <DotFilledIcon />
                            </DropdownMenuItemIndicator>
                            Pedro Duarte
                        </DropdownMenuRadioItem>
                        <DropdownMenuRadioItem
                            className='DropdownMenuRadioItem'
                            value='colm'>
                            <DropdownMenuItemIndicator className='DropdownMenuItemIndicator'>
                                <DotFilledIcon />
                            </DropdownMenuItemIndicator>
                            Colm Tuite
                        </DropdownMenuRadioItem>
                    </DropdownMenuRadioGroup>

                    <DropdownMenuArrow className='DropdownMenuArrow' />
                </DropdownMenuContent>
            </DropdownMenuPortal>
        </DropdownMenuRoot>
    );
}

const meta: Meta = {
    component: SampleDropdownMenu,
    argTypes: {},
};

export default meta;

type Story = StoryObj;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
    render: (props) => <SampleDropdownMenu {...props} />,
    name: 'SampleDropdownMenu',
    args: {},
};
