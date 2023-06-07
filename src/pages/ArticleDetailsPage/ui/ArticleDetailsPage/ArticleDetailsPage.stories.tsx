import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook';
import { Theme } from 'app/providers/ThemeProvider';
import ArticleDetailsPage from './ArticleDetailsPage';

const meta: Meta<typeof ArticleDetailsPage> = {
    title: 'folder/ArticleDetailsPage',
    component: ArticleDetailsPage,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const LightArticleDetailsPage: Story = {
    args: {},
};

export const DarkArticleDetailsPage: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.DARK)],
};
