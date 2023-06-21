import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook';
import { Theme } from 'app/providers/ThemeProvider';
import { CommentCard } from './CommentCard';

const comment = {
    id: '1',
    text: 'hello',
    user: {
        id: '1',
        username: 'Username1',
    },
};

const meta: Meta<typeof CommentCard> = {
    title: 'entities/Comment/CommentCard',
    component: CommentCard,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const LightCommentCard: Story = {
    args: {
        comment,
    },
};

export const DarkCommentCard: Story = {
    args: {
        comment,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const OrangeCommentCard: Story = {
    args: {
        comment,
    },
    decorators: [ThemeDecorator(Theme.ORANGE)],
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

export const OrangeCommentCardLoading: Story = {
    args: {
        isLoading: true,
    },
    decorators: [ThemeDecorator(Theme.ORANGE)],
};
