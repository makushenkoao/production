import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import MainPage from './MainPage';

const meta: Meta<typeof MainPage> = {
    title: 'widgets/MainPage',
    component: MainPage,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const LightMainPage: Story = {
    args: {
    },
};

export const DarkMainPage: Story = {
    args: {
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};
