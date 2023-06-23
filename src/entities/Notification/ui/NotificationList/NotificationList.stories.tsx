import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook';
import { Theme } from 'app/providers/ThemeProvider';
import { NotificationList } from './NotificationList';

// TODO - write stories

const meta: Meta<typeof NotificationList> = {
    title: 'folder/NotificationList',
    component: NotificationList,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const LightNotificationList: Story = {
    args: {},
};

export const DarkNotificationList: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.DARK)],
};
