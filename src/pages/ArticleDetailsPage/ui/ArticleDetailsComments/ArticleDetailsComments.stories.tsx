import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook';
import { Theme } from 'app/providers/ThemeProvider';
import { ArticleDetailsComments } from './ArticleDetailsComments';

// TODO - write stories

const meta: Meta<typeof ArticleDetailsComments> = {
    title: 'pages/ArticleDetailsPage/ArticleDetailsComments',
    component: ArticleDetailsComments,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const LightArticleDetailsComments: Story = {
    args: {},
};

export const DarkArticleDetailsComments: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.DARK)],
};
