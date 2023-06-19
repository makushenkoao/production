import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook';
import { Theme } from 'app/providers/ThemeProvider';
import { ARTICLE_MOCK } from 'shared/config/storybook/mock/article';
import { ArticleView } from '../../model/types/article';
import { ArticleListItem } from './ArticleListItem';

const meta: Meta<typeof ArticleListItem> = {
    title: 'entities/Article/ArticleListItem',
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
