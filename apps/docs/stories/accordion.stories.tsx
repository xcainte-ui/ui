import type { Meta, StoryObj } from '@storybook/react';
import { Accordion, type AccordionProps } from '@acme/ui';

const meta: Meta<AccordionProps> = {
    component: Accordion,
    argTypes: {},
};

export default meta;

type Story = StoryObj<typeof Accordion>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
    render: (props) => (
        <Accordion
            {...props}
            items={[
                { title: 'Hello', children: 'world' },
                { title: 'This is', children: 'accordion component' },
            ]}
        />
    ),
    name: 'Accordion',
    args: {},
};
