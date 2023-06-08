import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook';
import { Theme } from 'app/providers/ThemeProvider';
import ArticlesPage from './ArticlesPage';

const meta: Meta<typeof ArticlesPage> = {
    title: 'pages/ArticlesPage',
    component: ArticlesPage,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const LightArticlesPage: Story = {
    args: {},
};

export const DarkArticlesPage: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.DARK)],
};
