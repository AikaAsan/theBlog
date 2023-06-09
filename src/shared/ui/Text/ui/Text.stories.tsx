import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Text, TextSize, TextTheme } from './Text';
import 'app/styles/index.scss';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';

export default {
    title: 'shared/Text',
    component: Text,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    title: 'Titie lorem ipsum',
    text: 'Text Description Description Description ',
};

export const Error = Template.bind({});
Error.args = {
    theme: TextTheme.ERROR,
    title: 'Titie lorem ipsum',
    text: 'Text Description Description Description ',
};

export const onlyTitle = Template.bind({});
onlyTitle.args = {
    title: 'Titie lorem ipsum',
};

export const onlyText = Template.bind({});
onlyText.args = {
    text: 'Text Description Description Description ',
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
    title: 'Titie lorem ipsum',
    text: 'Text Description Description Description ',
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const ErrorDark = Template.bind({});
ErrorDark.args = {
    theme: TextTheme.ERROR,
    title: 'Titie lorem ipsum',
    text: 'Text Description Description Description ',
};

ErrorDark.decorators = [ThemeDecorator(Theme.DARK)];
export const onlyTitleDark = Template.bind({});
onlyTitleDark.args = {
    title: 'Titie lorem ipsum',
};
onlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)];

export const onlyTextDark = Template.bind({});
onlyTextDark.args = {
    text: 'Text Description Description Description ',
};
onlyTextDark.decorators = [ThemeDecorator(Theme.DARK)];

export const SizeL = Template.bind({});

SizeL.args = {
    title: 'Title Lorem Ipsum',
    text: 'DEscription, DEscription, DEscription, DEscription',
    size: TextSize.L,
};
export const SizeM = Template.bind({});

SizeM.args = {
    title: 'Title Lorem Ipsum',
    text: 'DEscription, DEscription, DEscription, DEscription',
    size: TextSize.M,
};

export const SizeS = Template.bind({});
SizeS.args = {
    title: 'Title Lorem Ipsum',
    text: 'DEscription, DEscription, DEscription, DEscription',
    size: TextSize.S,
};
