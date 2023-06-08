import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook';
import { Theme } from 'app/providers/ThemeProvider';
import { CommentList } from './CommentList';

const meta: Meta<typeof CommentList> = {
    title: 'folder/CommentList',
    component: CommentList,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const LightCommentList: Story = {
    args: {},
};

export const DarkCommentList: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.DARK)],
};
