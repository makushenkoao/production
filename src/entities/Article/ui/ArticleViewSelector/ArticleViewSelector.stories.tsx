import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook';
import { Theme } from 'app/providers/ThemeProvider';
import { ArticleViewSelector } from './ArticleViewSelector';

// TODO - write stories

const meta: Meta<typeof ArticleViewSelector> = {
    title: 'folder/ArticleViewSelector',
    component: ArticleViewSelector,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const LightArticleViewSelector: Story = {
    args: {},
};

export const DarkArticleViewSelector: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.DARK)],
};
