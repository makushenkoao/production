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

export const LightArticleListItemViewSmall: Story = {
    args: {
        view: ArticleView.SMALL,
    },
};

export const LightArticleListItemViewBig: Story = {
    args: {
        view: ArticleView.BIG,
    },
};

export const DarkArticleListItemViewSmall: Story = {
    args: {
        view: ArticleView.SMALL,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const DarkArticleListItemViewBig: Story = {
    args: {
        view: ArticleView.BIG,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const OrangeArticleListItemViewSmall: Story = {
    args: {
        view: ArticleView.SMALL,
    },
    decorators: [ThemeDecorator(Theme.ORANGE)],
};

export const OrangeArticleListItemViewBig: Story = {
    args: {
        view: ArticleView.BIG,
    },
    decorators: [ThemeDecorator(Theme.ORANGE)],
};
