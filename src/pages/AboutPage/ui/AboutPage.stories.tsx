import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import { StoreDecorator } from '@/shared/config/storybook/decorators/StoreDecorator';
import AboutPage from './AboutPage';

const meta: Meta<typeof AboutPage> = {
    title: 'pages/AboutPage',
    component: AboutPage,
    decorators: [StoreDecorator({})],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const LightAboutPage: Story = {
    args: {
    },
};

export const DarkAboutPage: Story = {
    args: {
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const OrangeAboutPage: Story = {
    args: {
    },
    decorators: [ThemeDecorator(Theme.ORANGE)],
};
