import { ComponentStory, ComponentMeta } from '@storybook/react';
import ArticleRating from './ArticleRating';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { Article } from '@/entities/Article';
import withMock from 'storybook-addon-mock';
import { template } from '@babel/core';

export default {
    title: 'features/ArticleRating',
    component: ArticleRating,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [withMock],
} as ComponentMeta<typeof ArticleRating>;

const Template: ComponentStory<typeof ArticleRating> = (args) => (
    <ArticleRating {...args} />
);

export const Normal = Template.bind({});
Normal.args = {
    articleId: '1',
};
Normal.decorators = [
    StoreDecorator({
        user: {
            authData: { id: '1' },
        },
    }),
];

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
//mock requests
Normal.parameters = {
    mockData: [
        {
            url: `${__API__}/article-ratings?userId=1&articleId=1`,
            method: 'GET',
            status: 200,
            response: [{ rate: 4 }],
        },
    ],
};

export const WithNoRating = Template.bind({});
WithNoRating.args = {
    articleId: '1',
};

WithNoRating.decorators = [
    StoreDecorator({
        user: {
            authData: { id: '1' },
        },
    }),
];

WithNoRating.parameters = {
    mockData: [
        {
            url: `${__API__}/article-ratings?userId=1&articleId=1`,
            method: 'GET',
            status: 200,
            response: [{ rate: 0 }],
        },
    ],
};
