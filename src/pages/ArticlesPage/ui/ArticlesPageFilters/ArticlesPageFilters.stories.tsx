import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook';
import { Theme } from 'app/providers/ThemeProvider';
import { ArticlesPageFilters } from './ArticlesPageFilters';

const meta: Meta<typeof ArticlesPageFilters> = {
    title: 'pages/Article/ArticlesPageFilters',
    component: ArticlesPageFilters,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const LightArticlesPageFilters: Story = {
    args: {},
};

export const DarkArticlesPageFilters: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.DARK)],
};
