import { ComponentStory, ComponentMeta } from '@storybook/react';
import { CommentCard } from './CommentCard';

export default {
    title: 'shared/CommentCard',
    component: CommentCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof CommentCard>;

const Template: ComponentStory<typeof CommentCard> = (args) => (
    <CommentCard {...args} />
);

export const Normal = Template.bind({});
Normal.args = {
    comment: {
        id: '1',
        user: { id: '1', username: 'Viishna' },
        text: 'hello world',
    },
};

export const Loading = Template.bind({});
Loading.args = {
    comment: {
        id: '1',
        user: { id: '1', username: 'Viishna' },
        text: 'hello world',
    },
    isLoading: true,
};
