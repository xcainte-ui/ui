import type { Meta, StoryObj } from '@storybook/react';
import styled from 'styled-components';
import { mauve } from '@radix-ui/colors';
import { HoverCard, type HoverCardProps } from '@acme/ui';

const meta: Meta<HoverCardProps> = {
    component: HoverCard,
    argTypes: {},
};

export default meta;

type Story = StoryObj<typeof HoverCard>;

const ImageTrigger = styled.a`
    all: unset;
    cursor: pointer;
    border-radius: 100%;
    display: inline-block;
    :focus {
        box-shadow: 0 0 0 2px white;
    }
`;

const Image = styled.img`
    display: block;
    border-radius: 100%;
    .normal {
        width: 45px;
        height: 45px;
    }
    .large {
        width: 60px;
        height: 60px;
    }
`;

const Text = styled.div`
    margin: 0;
    color: ${mauve.mauve12};
    font-size: 15px;
    line-height: 1.5;
    .faded {
        color: var(--mauve-10);
    }
    .bold {
        font-weight: 500;
    }
`;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
    render: (props) => (
        <HoverCard
            trigger={
                <ImageTrigger
                    target='_blank'
                    rel='noreferrer noopener'
                    href='https://twitter.com/radix_ui'>
                    <Image
                        className='normal'
                        src='https://pbs.twimg.com/profile_images/1337055608613253126/r_eiMp2H_400x400.png'
                        alt='Radix UI'
                    />
                </ImageTrigger>
            }>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 7,
                }}>
                <Image
                    className='large'
                    src='https://pbs.twimg.com/profile_images/1337055608613253126/r_eiMp2H_400x400.png'
                    alt='Radix UI'
                />
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 15,
                    }}>
                    <div>
                        <Text className='bold'>Radix</Text>
                        <Text className='faded'>@radix_ui</Text>
                    </div>
                    <div className='Text'>
                        Components, icons, colors, and templates for building
                        high-quality, accessible UI. Free and open-source.
                    </div>
                    <div style={{ display: 'flex', gap: 15 }}>
                        <div style={{ display: 'flex', gap: 5 }}>
                            <Text className='bold'>0</Text>{' '}
                            <Text className='faded'>Following</Text>
                        </div>
                        <div style={{ display: 'flex', gap: 5 }}>
                            <Text className='bold'>2,900</Text>{' '}
                            <Text className='faded'>Followers</Text>
                        </div>
                    </div>
                </div>
            </div>
        </HoverCard>
    ),
    name: 'HoverCard',
    args: {},
};
