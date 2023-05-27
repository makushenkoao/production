import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import AboutPage from './AboutPage';

const meta: Meta<typeof AboutPage> = {
    title: 'widgets/AboutPage',
    component: AboutPage,
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
