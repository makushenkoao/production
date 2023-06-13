import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook';
import { Theme } from 'app/providers/ThemeProvider';
import ArticleEditPage from './ArticleEditPage';

const meta: Meta<typeof ArticleEditPage> = {
    title: 'pages/Article/ArticleEditPage',
    component: ArticleEditPage,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const LightArticleEditPage: Story = {
    args: {},
};

export const DarkArticleEditPage: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.DARK)],
};
