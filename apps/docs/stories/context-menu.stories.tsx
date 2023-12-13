import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import styled from 'styled-components';
import {
    DotFilledIcon,
    CheckIcon,
    ChevronRightIcon,
} from '@radix-ui/react-icons';
import { mauve } from '@radix-ui/colors';
import {
    ContextMenuRoot,
    ContextMenuSub,
    ContextMenuTrigger,
    ContextMenuPortal,
    ContextMenuContent,
    ContextMenuSubContent,
    ContextMenuItem,
    ContextMenuCheckboxItem,
    ContextMenuRadioGroup,
    ContextMenuRadioItem,
    ContextMenuSubTrigger,
    ContextMenuLabel,
    ContextMenuSeparator,
    ContextMenuItemIndicator,
} from '@acme/ui';

const RightSlot = styled.div`
    margin-left: auto;
    padding-left: 20;
    color: ${mauve.mauve11};
    [data-highlighted] > & {
        color: 'white';
    }
    [data-disabled] & {
        color: ${mauve.mauve8};
    }
`;

function SampleContextMenu(): JSX.Element {
    const [bookmarksChecked, setBookmarksChecked] = useState(true);
    const [urlsChecked, setUrlsChecked] = useState(false);
    const [person, setPerson] = useState('pedro');

    return (
        <ContextMenuRoot>
            <ContextMenuTrigger>Right click here.</ContextMenuTrigger>

            <ContextMenuPortal>
                <ContextMenuContent
                // sideOffset={5}
                // align='end'
                >
                    <ContextMenuItem>
                        Back <RightSlot>⌘+[</RightSlot>
                    </ContextMenuItem>
                    <ContextMenuItem
                        className='ContextMenuItem'
                        disabled>
                        Foward <RightSlot>⌘+]</RightSlot>
                    </ContextMenuItem>
                    <ContextMenuItem>
                        Reload <RightSlot>⌘+R</RightSlot>
                    </ContextMenuItem>

                    <ContextMenuSub>
                        <ContextMenuSubTrigger>
                            More Tools
                            <RightSlot>
                                <ChevronRightIcon />
                            </RightSlot>
                        </ContextMenuSubTrigger>
                        <ContextMenuPortal>
                            <ContextMenuSubContent
                                sideOffset={2}
                                alignOffset={-5}>
                                <ContextMenuItem>
                                    Save Page As… <RightSlot>⌘+S</RightSlot>
                                </ContextMenuItem>
                                <ContextMenuItem>
                                    Create Shortcut…
                                </ContextMenuItem>
                                <ContextMenuItem>Name Window…</ContextMenuItem>
                                <ContextMenuSeparator />
                                <ContextMenuItem>
                                    Developer Tools
                                </ContextMenuItem>
                            </ContextMenuSubContent>
                        </ContextMenuPortal>
                    </ContextMenuSub>

                    <ContextMenuSeparator />

                    <ContextMenuCheckboxItem
                        checked={bookmarksChecked}
                        onCheckedChange={setBookmarksChecked}>
                        <ContextMenuItemIndicator>
                            <CheckIcon />
                        </ContextMenuItemIndicator>
                        Show Bookmarks <RightSlot>⌘+B</RightSlot>
                    </ContextMenuCheckboxItem>
                    <ContextMenuCheckboxItem
                        checked={urlsChecked}
                        onCheckedChange={setUrlsChecked}>
                        <ContextMenuItemIndicator>
                            <CheckIcon />
                        </ContextMenuItemIndicator>
                        Show Full URLs
                    </ContextMenuCheckboxItem>

                    <ContextMenuSeparator />

                    <ContextMenuLabel>People</ContextMenuLabel>
                    <ContextMenuRadioGroup
                        value={person}
                        onValueChange={setPerson}>
                        <ContextMenuRadioItem value='pedro'>
                            <ContextMenuItemIndicator>
                                <DotFilledIcon />
                            </ContextMenuItemIndicator>
                            Pedro Duarte
                        </ContextMenuRadioItem>
                        <ContextMenuRadioItem value='colm'>
                            <ContextMenuItemIndicator>
                                <DotFilledIcon />
                            </ContextMenuItemIndicator>
                            Colm Tuite
                        </ContextMenuRadioItem>
                    </ContextMenuRadioGroup>
                </ContextMenuContent>
            </ContextMenuPortal>
        </ContextMenuRoot>
    );
}

const meta: Meta = {
    component: SampleContextMenu,
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
    render: (props) => <SampleContextMenu {...props} />,
    name: 'SampleContextMenu',
    args: {},
};
