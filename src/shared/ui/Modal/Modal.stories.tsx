import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Modal } from './Modal';
import '@/app/styles/index.scss';
import { Theme } from '@/app/providers/ThemeProvider';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';

export default {
    title: 'shared/Modal',
    component: Modal,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    children:
        '  quasi architecto beatae vitae dicta sunt explicabo. Nemo enim \
                ipsam voluptatem quia voluptas sit aspernatur aut odit aut \
                fugit, sed quia consequuntur magni dolores eos qui ratione \
                voluptatem sequi nesciunt. Neque porro quisquam est,',
    isOpen: true,
    className: '',
};
Primary.decorators = [ThemeDecorator(Theme.LIGHT)];

export const Dark = Template.bind({});

Dark.args = {
    children:
        '  quasi architecto beatae vitae dicta sunt explicabo. Nemo enim \
                ipsam voluptatem quia voluptas sit aspernatur aut odit aut \
                fugit, sed quia consequuntur magni dolores eos qui ratione \
                voluptatem sequi nesciunt. Neque porro quisquam est,',
    isOpen: true,
    className: '',
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
