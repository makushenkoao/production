import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook';
import { Theme } from 'app/providers/ThemeProvider';
import { CommentList } from './CommentList';

const meta: Meta<typeof CommentList> = {
    title: 'entities/Comment/CommentList',
    component: CommentList,
    args: {
        comments: [
            {
                id: '1',
                text: 'hello',
                user: {
                    id: '1',
                    username: 'Username1',
                },
            },
            {
                id: '2',
                text: 'hello',
                user: {
                    id: '2',
                    username: 'Username2',
                },
            },
        ],
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const LightCommentList: Story = {
    args: {
    },
};

export const DarkCommentList: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.DARK)],
};
