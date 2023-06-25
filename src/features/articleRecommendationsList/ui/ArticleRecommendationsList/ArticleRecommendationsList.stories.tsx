import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook';
import { Theme } from '@/app/providers/ThemeProvider';
import { ARTICLE_MOCK } from '@/shared/config/storybook/mock/article';
import { StoreDecorator } from '@/shared/config/storybook/decorators/StoreDecorator';
import { ArticleRecommendationsList } from './ArticleRecommendationsList';

const meta: Meta<typeof ArticleRecommendationsList> = {
    title: 'features/ArticleRecommendationsList',
    component: ArticleRecommendationsList,
    decorators: [StoreDecorator({})],
    parameters: {
        mockData: [
            {
                url: `${__API__}/articles?_limit=3`,
                method: 'GET',
                status: 200,
                response: [
                    { ...ARTICLE_MOCK, id: '1' },
                    { ...ARTICLE_MOCK, id: '2' },
                    { ...ARTICLE_MOCK, id: '3' },
                ],
            },
        ],
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const LightArticleRecommendationsList: Story = {
    args: {
    },
};

export const DarkArticleRecommendationsList: Story = {
    args: {
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const OrangeArticleRecommendationsList: Story = {
    args: {
    },
    decorators: [ThemeDecorator(Theme.ORANGE)],
};
