import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from '@/app/providers/ThemeProvider';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import ProfilePage from './ProfilePage';

export default {
    title: 'pages/ProfilePage',
    component: ProfilePage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = (args: object) => (
    <ProfilePage {...args} />
);

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [
    StoreDecorator({
        profile: {
            // isLoading: false,
            // readonly: true,
            // error: undefined,
            form: {
                first: 'Aika',
                lastname: 'Carriere',
                city: 'Bishkek',
                currency: Currency.CAD,
                country: Country.Canada,
                avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSttNLsnXTX0s2-ARH0QUI5Fhim5SXBl8irlA&usqp=CAU',
            },
        },
    }),
];
export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({
        profile: {
            // isLoading: false,
            // readonly: true,
            // error: undefined,
            form: {
                first: 'Aika',
                lastname: 'Carriere',
                city: 'Bishkek',
                currency: Currency.CAD,
                country: Country.Canada,
                avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSttNLsnXTX0s2-ARH0QUI5Fhim5SXBl8irlA&usqp=CAU',
            },
        },
    }),
];
