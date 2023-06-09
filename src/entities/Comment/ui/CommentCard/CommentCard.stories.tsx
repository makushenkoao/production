import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook';
import { Theme } from 'app/providers/ThemeProvider';
import { CommentCard } from './CommentCard';

const meta: Meta<typeof CommentCard> = {
    title: 'entities/Comment/CommentCard',
    component: CommentCard,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const LightCommentCard: Story = {
    args: {
        comment: {
            id: '1',
            text: 'hello',
            user: {
                id: '1',
                username: 'Username1',
            },
        },
    },
};

export const DarkCommentCard: Story = {
    args: {
        comment: {
            id: '1',
            text: 'hello',
            user: {
                id: '1',
                username: 'Username1',
            },
        },
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const LightCommentCardLoading: Story = {
    args: {
        isLoading: true,
    },
};

export const DarkCommentCardLoading: Story = {
    args: {
        isLoading: true,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};
