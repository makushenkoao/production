import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook';
import { Theme } from '@/app/providers/ThemeProvider';
import { ArticleViewSelector } from './ArticleViewSelector';

const meta: Meta<typeof ArticleViewSelector> = {
    title: 'entities/Article/ArticleViewSelector',
    component: ArticleViewSelector,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const LightArticleViewSelector: Story = {
    args: {},
};

export const DarkArticleViewSelector: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const OrangeArticleViewSelector: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.ORANGE)],
};
