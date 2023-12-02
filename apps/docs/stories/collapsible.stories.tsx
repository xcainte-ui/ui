import type { Meta, StoryObj } from '@storybook/react';
import { Collapsible, type CollapsibleProps } from '@acme/ui';

const meta: Meta<CollapsibleProps> = {
    component: Collapsible,
    argTypes: {},
};

export default meta;

type Story = StoryObj<typeof Collapsible>;

export const Primary: Story = {
    render: (props) => (
        <Collapsible
            {...props}
            title='XC UI Collapsible'
            items={['Item 1', 'Item 2', 'Item 3']}
            // open={true}
            // onOpenChange={(open: boolean) => {}}
        />
    ),
    name: 'Collapsible',
    args: {},
};
