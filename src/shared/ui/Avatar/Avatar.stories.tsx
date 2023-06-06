import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook';
import { Theme } from 'app/providers/ThemeProvider';
import { Avatar } from './Avatar';
import AvatarPng from './storybook.png';

const meta: Meta<typeof Avatar> = {
    title: 'shared/Avatar',
    component: Avatar,
    args: {
        src: AvatarPng,
        alt: 'Avatar',
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const AvatarDefaultLightTheme: Story = {
    args: {
    },
};

export const AvatarWithHeightWidthLightTheme: Story = {
    args: {
        width: 50,
        height: 50,
    },
};

export const AvatarDefaultDarkTheme: Story = {
    args: {
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const AvatarWithHeightWidthDarkTheme: Story = {
    args: {
        width: 50,
        height: 50,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};
