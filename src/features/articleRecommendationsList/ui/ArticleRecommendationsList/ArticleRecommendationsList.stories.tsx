import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook';
import { Theme } from 'app/providers/ThemeProvider';
import { ArticleRecommendationsList } from './ArticleRecommendationsList';

// Write stories

const meta: Meta<typeof ArticleRecommendationsList> = {
    title: 'features/ArticleRecommendationsList',
    component: ArticleRecommendationsList,
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
