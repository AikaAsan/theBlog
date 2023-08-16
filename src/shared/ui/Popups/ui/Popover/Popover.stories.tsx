import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Popover } from './Popover';

export default {
    title: 'shared/Popover',
    component: Popover,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [
        (Story) => (
            <div style={{ padding: '100px' }}>
                <Story />
            </div>
        ),
    ],
} as ComponentMeta<typeof Popover>;

const Template: ComponentStory<typeof Popover> = (args) => (
    <Popover {...args} />
);

export const Normal = Template.bind({});
Normal.args = {
    direction: 'bottom right',
    children: 'testtest',
    trigger: <button>Click me</button>,
};

export const topLeft = Template.bind({});
topLeft.args = {
    direction: 'top left',
    children: 'testtest',
    trigger: <button>Click me</button>,
};

export const topRight = Template.bind({});
topRight.args = {
    direction: 'top right',
    children: 'testtest',
    trigger: <button>Click me</button>,
};

export const bottomLeft = Template.bind({});
bottomLeft.args = {
    direction: 'bottom left',
    children: 'testtest',
    trigger: <button>Click me</button>,
};
