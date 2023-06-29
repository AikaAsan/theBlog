import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ArticlesRecommendationsList } from './ArticlesRecommendationsList';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';

export default {
    title: 'features/ArticlesRecommendationsList',
    component: ArticlesRecommendationsList,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticlesRecommendationsList>;

const Template: ComponentStory<typeof ArticlesRecommendationsList> = (args) => <ArticlesRecommendationsList {...args} />;

export const Normal = Template.bind({});
Normal.args = {
   
};
Normal.decorators = [StoreDecorator({})];