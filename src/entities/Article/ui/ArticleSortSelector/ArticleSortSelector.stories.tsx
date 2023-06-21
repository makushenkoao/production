import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook';
import { Theme } from 'app/providers/ThemeProvider';
import { ArticleSortSelector } from './ArticleSortSelector';

const meta: Meta<typeof ArticleSortSelector> = {
    title: 'entities/Article/ArticleSortSelector',
    component: ArticleSortSelector,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const LightArticleSortSelector: Story = {
    args: {
    },
};

export const DarkArticleSortSelector: Story = {
    args: {
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const OrangeArticleSortSelector: Story = {
    args: {
    },
    decorators: [ThemeDecorator(Theme.ORANGE)],
};
