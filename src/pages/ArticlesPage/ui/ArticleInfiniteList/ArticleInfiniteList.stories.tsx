import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook';
import { Theme } from 'app/providers/ThemeProvider';
import { ArticleInfiniteList } from './ArticleInfiniteList';

// TODO - write stories

const meta: Meta<typeof ArticleInfiniteList> = {
    title: 'folder/ArticleInfiniteList',
    component: ArticleInfiniteList,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const LightArticleInfiniteList: Story = {
    args: {},
};

export const DarkArticleInfiniteList: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.DARK)],
};
