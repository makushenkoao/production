import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook';
import { Theme } from 'app/providers/ThemeProvider';
import { AvatarDropdown } from './AvatarDropdown';

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
