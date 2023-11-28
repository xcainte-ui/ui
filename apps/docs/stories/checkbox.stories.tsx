import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox, type CheckboxProps } from '@acme/ui';

const meta: Meta<CheckboxProps> = {
    component: Checkbox,
    argTypes: {},
};

export default meta;

type Story = StoryObj<typeof Checkbox>;

export const Primary: Story = {
    render: (props) => (
        <Checkbox
            {...props}
            label='My checkbox'
        />
    ),
    name: 'Checkbox',
    args: {},
};
