import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook';
import { Theme } from 'app/providers/ThemeProvider';
import { Popover } from './Popover';

// TODO - write stories

const meta: Meta<typeof Popover> = {
    title: 'shared/Popups/Popover',
    component: Popover,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const LightPopover: Story = {
    args: {},
};

export const DarkPopover: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.DARK)],
};
