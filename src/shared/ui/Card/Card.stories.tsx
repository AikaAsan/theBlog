import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Card } from './Card';
import { Text } from 'shared/ui/Text/ui/Text';

export default {
    title: 'shared/Card',
    component: Card,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    children: <Text text='texttextetets' title='Title' />,
};
