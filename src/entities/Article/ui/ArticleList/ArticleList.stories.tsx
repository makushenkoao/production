import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook';
import { Theme } from '@/app/providers/ThemeProvider';
import { ARRAY_ARTICLE_MOCK } from '@/shared/config/storybook/mock/article';
import { ArticleView } from '../../model/consts/consts';
import { ArticleList } from './ArticleList';

const meta: Meta<typeof ArticleList> = {
    title: 'entities/Article/ArticleList',
    component: ArticleList,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const ArticleListLoadingBigLightTheme: Story = {
    args: {
        isLoading: true,
        articles: [],
        view: ArticleView.BIG,
    },
};

export const ArticleListLoadingSmallLightTheme: Story = {
    args: {
        isLoading: true,
        articles: [],
        view: ArticleView.SMALL,
    },
};

export const ArticleListLoadingBigDarkTheme: Story = {
    args: {
        isLoading: true,
        articles: [],
        view: ArticleView.BIG,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const ArticleListLoadingSmallDarkTheme: Story = {
    args: {
        isLoading: true,
        articles: [],
        view: ArticleView.SMALL,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const ArticleListLoadingBigOrangeTheme: Story = {
    args: {
        isLoading: true,
        articles: [],
        view: ArticleView.BIG,
    },
    decorators: [ThemeDecorator(Theme.ORANGE)],
};

export const ArticleListLoadingSmallOrangeTheme: Story = {
    args: {
        isLoading: true,
        articles: [],
        view: ArticleView.SMALL,
    },
    decorators: [ThemeDecorator(Theme.ORANGE)],
};

export const ArticleListBigLightTheme: Story = {
    args: {
        articles: ARRAY_ARTICLE_MOCK,
        view: ArticleView.BIG,
    },
};

export const ArticleListSmallLightTheme: Story = {
    args: {
        articles: ARRAY_ARTICLE_MOCK,
        view: ArticleView.SMALL,
    },
};

export const ArticleListBigDarkTheme: Story = {
    args: {
        articles: ARRAY_ARTICLE_MOCK,
        view: ArticleView.BIG,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const ArticleListSmallDarkTheme: Story = {
    args: {
        articles: ARRAY_ARTICLE_MOCK,
        view: ArticleView.SMALL,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const ArticleListBigOrangeTheme: Story = {
    args: {
        articles: ARRAY_ARTICLE_MOCK,
        view: ArticleView.BIG,
    },
    decorators: [ThemeDecorator(Theme.ORANGE)],
};

export const ArticleListSmallOrangeTheme: Story = {
    args: {
        articles: ARRAY_ARTICLE_MOCK,
        view: ArticleView.SMALL,
    },
    decorators: [ThemeDecorator(Theme.ORANGE)],
};
