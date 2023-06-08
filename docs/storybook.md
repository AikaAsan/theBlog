## Storybook

Storybook is an essential part of this project. It provides a dedicated space to develop, document, and test individual UI components in isolation. With Storybook, you can easily view and interact with each component independently, making it easier to iterate and ensure their functionality and design meet the desired requirements.

Server requests are mocked using storybook-addon-mock.

A file with stories is created next to the component with the extension .stories.tsx

### Available Stories
The following UI components and parts are available in Storybook:

Entities/Article:
- ArticleDetails
- ArticleList
- ArticleListItem
- ArticleSortSelector
- ArticleTypeTabs
- ArticleViewSelector

Entities/User:
- CountrySelect
- CurrencySelect
- ProfileCard

Shared: 
- CommentCard
- CommentList
- AppLink
- Avatar
- Button
- Card
- Code
- Input
- Loader
- Modal
- Page
- Select
- Skeleton
- Flex
- Tabs
- Text
- ThemeSwitcher

Features:
- AddCommentForm
- LoginForm

Pages: 
- AboutPage
- ArticleEditPage
- MainPage
- NotFoundPage
- ProfilePage

Widgets: 
- Navbar
- PageError
- Sidebar

Each component is thoroughly documented and can be viewed with real-time previews and interactive controls. Feel free to explore and test the components using Storybook.
Start the storybook with the command: `npm run storybook`

[Learn more about Storybook](https://storybook.js.org/)

Example:
```tsx
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Button, ButtonSize, ButtonTheme } from './Button';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'shared/Button',
    component:Button,
    argTypes: {
    backgroundColor: { control: 'color' },
},
} as ComponentMeta<typeofButton>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
    Primary.args = {
    children: 'Text',
};

export const Clear = Template.bind({});
    Clear.args = {
    children: 'Text',
    theme:ButtonTheme.CLEAR,
};
```