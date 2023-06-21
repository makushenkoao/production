import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/decorators/StoreDecorator';
import { ArticleInfiniteList } from './ArticleInfiniteList';

const meta: Meta<typeof ArticleInfiniteList> = {
    title: 'pages/Article/ArticleInfiniteList',
    component: ArticleInfiniteList,
    decorators: [StoreDecorator({})],
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

export const OrangeArticleInfiniteList: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.ORANGE)],
};
