import { ComponentStory, ComponentMeta } from '@storybook/react';
import '@/app/styles/index.scss';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import { ProfileCard } from './ProfileCard';
// import AvatarImg from 'shared/assets/tests/storybook.jpg';

export default {
    title: 'entities/ProfileCard',
    component: ProfileCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => (
    <ProfileCard {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
    data: {
        first: 'Aika',
        lastname: 'Carriere',
        city: 'Bishkek',
        currency: Currency.CAD,
        country: Country.Canada,
        avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSttNLsnXTX0s2-ARH0QUI5Fhim5SXBl8irlA&usqp=CAU',
    },
};

export const withError = Template.bind({});
withError.args = {
    error: 'error',
};

export const loading = Template.bind({});
loading.args = {
    isLoading: true,
};
