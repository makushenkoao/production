import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook';
import { Theme } from 'app/providers/ThemeProvider';
import { Dropdown } from './Dropdown';

// TODO - write stories

const meta: Meta<typeof Dropdown> = {
    title: 'folder/Dropdown',
    component: Dropdown,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const LightDropdown: Story = {
    args: {},
};

export const DarkDropdown: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.DARK)],
};
