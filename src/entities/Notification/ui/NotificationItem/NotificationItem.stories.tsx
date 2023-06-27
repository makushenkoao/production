import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook';
import { NotificationItem } from './NotificationItem';
import { Theme } from '@/shared/const/theme';

// TODO - write stories

const meta: Meta<typeof NotificationItem> = {
    title: 'folder/NotificationItem',
    component: NotificationItem,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const LightNotificationItem: Story = {
    args: {},
};

export const DarkNotificationItem: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.DARK)],
};
