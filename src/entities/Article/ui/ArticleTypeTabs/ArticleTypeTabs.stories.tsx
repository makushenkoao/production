import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook';
import { Theme } from 'app/providers/ThemeProvider';
import { ArticleTypeTabs } from './ArticleTypeTabs';

const meta: Meta<typeof ArticleTypeTabs> = {
    title: 'entities/Article/ArticleTypeTabs',
    component: ArticleTypeTabs,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const LightArticleTypeTabs: Story = {
    args: {},
};

export const DarkArticleTypeTabs: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.DARK)],
};
