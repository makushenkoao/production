import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook';
import { Theme } from 'app/providers/ThemeProvider';
import { CommentCard } from './CommentCard';

const meta: Meta<typeof CommentCard> = {
    title: 'folder/CommentCard',
    component: CommentCard,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const LightCommentCard: Story = {
    args: {},
};

export const DarkCommentCard: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.DARK)],
};
