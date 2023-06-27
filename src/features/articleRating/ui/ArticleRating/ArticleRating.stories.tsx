import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook';
import ArticleRating from './ArticleRating';
import { Theme } from '@/shared/const/theme';

// TODO - write stories

const meta: Meta<typeof ArticleRating> = {
    title: 'pages/ArticleRating',
    component: ArticleRating,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const LightArticleRating: Story = {
    args: {},
};

export const DarkArticleRating: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const OrangeArticleRating: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.ORANGE)],
};
