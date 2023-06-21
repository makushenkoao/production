import type { Meta, StoryObj } from '@storybook/react';
import AvatarPng from 'shared/assets/tests/storybook.png';
import { Avatar } from './Avatar';

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

export const AvatarDefault: Story = {
    args: {
    },
};

export const AvatarWithHeightWidth: Story = {
    args: {
        width: 50,
        height: 50,
    },
};

export const AvatarRounded: Story = {
    args: {
        rounded: true,
    },
};
