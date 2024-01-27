import type { Meta, StoryObj } from '@storybook/react';
import { Label, type LabelProps } from '@acme/ui';

const meta: Meta<LabelProps> = {
    component: Label,
    argTypes: {},
};

export default meta;

type Story = StoryObj<typeof Label>;

export const Primary: Story = {
    render: (props) => (
        <Label
            {...props}
            label='Hello'
        />
    ),
    name: 'Label',
    args: {},
};
