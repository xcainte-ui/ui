import type { Meta, StoryObj } from '@storybook/react';
import styled from 'styled-components';
import { blackA, green, mauve, violet } from '@radix-ui/colors';
import {
    DialogRoot,
    DialogTrigger,
    DialogPortal,
    DialogTitle,
    DialogDescription,
    DialogBody,
    DialogFooter,
} from '@acme/ui';

const Fieldset = styled.fieldset`
    all: unset;
    display: flex;
    gap: 20px;
    align-items: center;
    margin-bottom: 15px;
`;

const Label = styled.label`
    font-size: 15px;
    color: ${violet.violet11};
    width: 90px;
    text-align: right;
`;

const Input = styled.input`
    all: unset;
    width: 100%;
    flex: 1;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    padding: 0 10px;
    font-size: 15px;
    line-height: 1;
    color: ${violet.violet11};
    box-shadow: 0 0 0 1px ${violet.violet7};
    height: 35px;

    :focus {
        box-shadow: 0 0 0 2px ${violet.violet8};
    }
`;

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
    .green {
        background-color: ${green.green3};
        color: ${green.green11};
    }
    .green:hover {
        background-color: ${green.green5};
    }
    .green:focus {
        box-shadow: 0 0 0 2px ${green.green7};
    }
`;

function SampleDialog(): JSX.Element {
    return (
        <DialogRoot>
            <DialogTrigger asChild>
                <Button>Edit profile</Button>
            </DialogTrigger>
            <DialogPortal>
                <DialogTitle>Edit profile</DialogTitle>
                <DialogDescription>
                    Make changes to your profile here. Click save when you're
                    done.
                </DialogDescription>

                <DialogBody>
                    <Fieldset>
                        <Label htmlFor='name'>Name</Label>
                        <Input
                            id='name'
                            defaultValue='Pedro Duarte'
                        />
                    </Fieldset>
                    <Fieldset>
                        <Label htmlFor='username'>Username</Label>
                        <Input
                            id='username'
                            defaultValue='@peduarte'
                        />
                    </Fieldset>
                </DialogBody>

                <DialogFooter>
                    <Button className='green'>Save changes</Button>
                </DialogFooter>
            </DialogPortal>
        </DialogRoot>
    );
}

const meta: Meta = {
    component: SampleDialog,
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
    render: (props) => <SampleDialog {...props} />,
    name: 'SampleDialog',
    args: {},
};
