import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook';
import { Theme } from 'app/providers/ThemeProvider';
import { NotificationButton } from './NotificationButton';

// TODO - write stories

const meta: Meta<typeof NotificationButton> = {
    title: 'pages/NotificationButton',
    component: NotificationButton,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const LightNotificationButton: Story = {
    args: {},
};

export const DarkNotificationButton: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const OrangeNotificationButton: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.ORANGE)],
};
