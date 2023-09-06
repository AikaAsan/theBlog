import { ComponentStory, ComponentMeta } from '@storybook/react';
import { NotificationItem } from './NotificationItem';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import withMock from 'storybook-addon-mock';

export default {
    title: 'entities/Notification/NotificationItem',
    component: NotificationItem,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [withMock],
} as ComponentMeta<typeof NotificationItem>;

const Template: ComponentStory<typeof NotificationItem> = (args) => (
    <NotificationItem {...args} />
);

export const Normal = Template.bind({});
Normal.args = {
    item: { id: '1', title: 'TestTest', description: 'Some Description' },
};
Normal.decorators = [StoreDecorator({})];
Normal.parameters = {
    mockData: [
        {
            url: `${__API__}/notifications`,
            method: 'GET',
            status: 200,
            response: [
                {
                    id: '1',
                    title: 'Notification 1',
                    description: 'description of the notification',
                },
                {
                    id: '2',
                    title: 'Notification 2',
                    description: 'description of the notification',
                },
                {
                    id: '3',
                    title: 'Notification 3',
                    description: 'description of the notification',
                },
            ],
        },
    ],
};
