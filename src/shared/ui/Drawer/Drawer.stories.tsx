import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook';
import { Theme } from 'app/providers/ThemeProvider';
import { Drawer } from './Drawer';

// TODO - write stories

const meta: Meta<typeof Drawer> = {
    title: 'folder/Drawer',
    component: Drawer,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const LightDrawer: Story = {
    args: {
    },
};

export const DarkDrawer: Story = {
    args: {
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};
