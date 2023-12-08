import type { Meta, StoryObj } from '@storybook/react';
import styled from 'styled-components';
import { blackA } from '@radix-ui/colors';
import { AspectRatio, type AspectRatioProps } from '@acme/ui';

const meta: Meta<AspectRatioProps> = {
    component: AspectRatio,
    argTypes: {},
};

export default meta;

type Story = StoryObj<typeof AspectRatio>;

const Container = styled.div`
    width: 300px;
    border-radius: 6px;
    overflow: hidden;
    box-shadow: 0 2px 10px ${blackA.blackA7};
`;

const Image = styled.img`
    object-fit: cover;
    width: 100%;
    height: 100%;
`;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
    render: (props) => (
        <Container>
            <AspectRatio
                {...props}
                ratio={16 / 9}>
                <Image
                    src='https://images.unsplash.com/photo-1535025183041-0991a977e25b?w=300&dpr=2&q=80'
                    alt='Landscape photograph by Tobias Tullius'
                />
            </AspectRatio>
        </Container>
    ),
    name: 'AspectRatio',
    args: {},
};
