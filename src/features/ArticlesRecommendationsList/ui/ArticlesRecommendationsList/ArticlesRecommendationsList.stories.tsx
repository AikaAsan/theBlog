import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ArticlesRecommendationsList } from './ArticlesRecommendationsList';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import withMock from 'storybook-addon-mock';
import { Article } from '@/entities/Article';

export default {
    title: 'features/ArticlesRecommendationsList',
    component: ArticlesRecommendationsList,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [withMock],
} as ComponentMeta<typeof ArticlesRecommendationsList>;

const Template: ComponentStory<typeof ArticlesRecommendationsList> = (args) => (
    <ArticlesRecommendationsList {...args} />
);

const article: Article = {
    id: '1',
    img: 'https://teknotower.com/wp-content/uploads/2020/11/js.png',
    createdAt: '26.02.2023',
    views: 123,
    user: { id: '1', username: '123' },
    blocks: [],
    type: [],
    title: 'Javascript news LATEST',
    subtitle: 'What is new in JavaScript in 2023?',
};

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [StoreDecorator({})];
Normal.parameters = {
    mockData: [
        {
            url: `${__API__}/articles?_limit=3`,
            method: 'GET',
            status: 200,
            response: [
                { ...article, id: '1' },
                { ...article, id: '2' },
                { ...article, id: '3' },
            ],
        },
    ],
};
