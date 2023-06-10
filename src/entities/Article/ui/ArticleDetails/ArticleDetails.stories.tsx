import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/decorators/StoreDecorator';
import { Article } from 'entities/Article';
import { ArticleBlockType, ArticleType } from 'entities/Article/model/types/article';
import { ARTICLE_MOCK } from 'shared/config/storybook/mock/article';
import { ArticleDetails } from './ArticleDetails';

const meta: Meta<typeof ArticleDetails> = {
    title: 'entities/ArticleDetails',
    component: ArticleDetails,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const LightArticleDetailsData: Story = {
    args: {},
    decorators: [StoreDecorator({
        articleDetails: {
            data: ARTICLE_MOCK,
        },
    })],
};

export const DarkArticleDetailsData: Story = {
    args: {},
    decorators: [StoreDecorator({
        articleDetails: {
            data: ARTICLE_MOCK,
        },
    }), ThemeDecorator(Theme.DARK)],
};

export const LightArticleDetailsLoading: Story = {
    args: {},
    decorators: [StoreDecorator({
        articleDetails: {
            isLoading: true,
        },
    })],
};

export const DarkArticleDetailsLoading: Story = {
    args: {},
    decorators: [StoreDecorator({
        articleDetails: {
            isLoading: true,
        },
    }), ThemeDecorator(Theme.DARK)],
};

export const LightArticleDetailsError: Story = {
    args: {},
    decorators: [StoreDecorator({
        articleDetails: {
            error: 'error',
        },
    })],
};

export const DarkArticleDetailsError: Story = {
    args: {},
    decorators: [StoreDecorator({
        articleDetails: {
            error: 'error',
        },
    }), ThemeDecorator(Theme.DARK)],
};
