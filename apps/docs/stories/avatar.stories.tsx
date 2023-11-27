import type { Meta, StoryObj } from '@storybook/react';
import { Avatar, type AvatarProps } from '@acme/ui';

const meta: Meta<AvatarProps> = {
    component: Avatar,
    argTypes: {},
};

export default meta;

type Story = StoryObj<typeof Avatar>;

export const Primary: Story = {
    render: (props) => (
        <Avatar
            {...props}
            src='https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80'
            alt='Colm Tuite'
        />
    ),
    name: 'Avatar',
    args: {},
};
