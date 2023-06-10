import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook';
import { Theme } from 'app/providers/ThemeProvider';
import { Article } from 'entities/Article';
import { ArticleBlockType, ArticleType } from 'entities/Article/model/types/article';
import { StoreDecorator } from 'shared/config/storybook/decorators/StoreDecorator';
import { ARTICLE_MOCK } from 'shared/config/storybook/mock/article';
import ArticleDetailsPage from './ArticleDetailsPage';

const meta: Meta<typeof ArticleDetailsPage> = {
    title: 'pages/ArticleDetailsPage',
    component: ArticleDetailsPage,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const LightArticleDetailsPage: Story = {
    args: {},
    decorators: [StoreDecorator({
        articleDetails: {
            data: ARTICLE_MOCK,
        },
    })],
};

export const DarkArticleDetailsPage: Story = {
    args: {},
    decorators: [StoreDecorator({
        articleDetails: {
            data: ARTICLE_MOCK,
        },
    }), ThemeDecorator(Theme.DARK)],
};
