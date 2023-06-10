import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook';
import { Theme } from 'app/providers/ThemeProvider';
import { ArticleView } from 'entities/Article';
import { ARTICLE_MOCK } from 'shared/config/storybook/mock/article';
import { ArticleListItem } from './ArticleListItem';

// TODO - write stories

const meta: Meta<typeof ArticleListItem> = {
    title: 'entities/ArticleListItem',
    component: ArticleListItem,
    args: {
        article: ARTICLE_MOCK,
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const ArticleListItemViewSmall: Story = {
    args: {
        view: ArticleView.SMALL,
    },
};

export const ArticleListItemViewBig: Story = {
    args: {
        view: ArticleView.BIG,
    },
};

export const DarkArticleListItem: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.DARK)],
};
