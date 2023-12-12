import type { Meta, StoryObj } from '@storybook/react';
import styled from 'styled-components';
import { blackA, red, mauve, violet } from '@radix-ui/colors';
import {
    AlertDialogRoot,
    AlertDialogTrigger,
    AlertDialogTitle,
    AlertDialogDescription,
    AlertDialogCancel,
    AlertDialogAction,
    AlertDialogPortal,
} from '@acme/ui';

const Button = styled.button`
    all: unset;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    padding: 0 15px;
    font-size: 15px;
    line-height: 1;
    font-weight: 500;
    height: 35px;
    .violet {
        background-color: white;
        color: ${violet.violet11};
        box-shadow: 0 2px 10px ${blackA.blackA7};
    }
    .violet:hover {
        background-color: ${mauve.mauve3};
    }
    .violet:focus {
        box-shadow: 0 0 0 2px black;
    }
    .red {
        background-color: ${red.red4};
        color: ${red.red11};
    }
    .red:hover {
        background-color: ${red.red5};
    }
    .red:focus {
        box-shadow: 0 0 0 2px ${red.red7};
    }
    .mauve {
        background-color: ${mauve.mauve4};
        color: ${mauve.mauve11};
    }
    .mauve:hover {
        background-color: ${mauve.mauve5};
    }
    .mauve:focus {
        box-shadow: 0 0 0 2px ${mauve.mauve7};
    }
`;

function SampleAlertDialog(): JSX.Element {
    return (
        <AlertDialogRoot>
            <AlertDialogTrigger asChild>
                <Button className='violet'>Delete account</Button>
            </AlertDialogTrigger>

            <AlertDialogPortal>
                <AlertDialogTitle className='AlertDialogTitle'>
                    Are you absolutely sure?
                </AlertDialogTitle>

                <AlertDialogDescription className='AlertDialogDescription'>
                    This action cannot be undone. This will permanently delete
                    your account and remove your data from our servers.
                </AlertDialogDescription>

                <div
                    style={{
                        display: 'flex',
                        gap: 25,
                        justifyContent: 'flex-end',
                    }}>
                    <AlertDialogCancel asChild>
                        <Button className='mauve'>Cancel</Button>
                    </AlertDialogCancel>
                    <AlertDialogAction asChild>
                        <Button className='red'>Yes, delete account</Button>
                    </AlertDialogAction>
                </div>
            </AlertDialogPortal>
        </AlertDialogRoot>
    );
}

const meta: Meta = {
    component: SampleAlertDialog,
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
    render: (props) => <SampleAlertDialog {...props} />,
    name: 'SampleDialog',
    args: {},
};
