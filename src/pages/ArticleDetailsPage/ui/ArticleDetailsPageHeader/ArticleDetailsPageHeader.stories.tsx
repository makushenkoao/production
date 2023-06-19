import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook';
import { Theme } from 'app/providers/ThemeProvider';
import { ArticleDetailsPageHeader } from './ArticleDetailsPageHeader';

const meta: Meta<typeof ArticleDetailsPageHeader> = {
    title: 'pages/ArticleDetailsPage/ArticleDetailsPageHeader',
    component: ArticleDetailsPageHeader,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const LightArticleDetailsPageHeader: Story = {
    args: {},
};

export const DarkArticleDetailsPageHeader: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.DARK)],
};
