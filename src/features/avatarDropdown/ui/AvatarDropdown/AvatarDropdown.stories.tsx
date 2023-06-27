import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook';
import { AvatarDropdown } from './AvatarDropdown';
import { Theme } from '@/shared/const/theme';

// TODO - write stories

const meta: Meta<typeof AvatarDropdown> = {
    title: 'pages/AvatarDropdown',
    component: AvatarDropdown,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const LightAvatarDropdown: Story = {
    args: {},
};

export const DarkAvatarDropdown: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const OrangeAvatarDropdown: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.ORANGE)],
};
