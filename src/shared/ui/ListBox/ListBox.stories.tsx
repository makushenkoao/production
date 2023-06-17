import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook';
import { Theme } from 'app/providers/ThemeProvider';
import { ListBox } from './ListBox';

// TODO - write stories

const meta: Meta<typeof ListBox> = {
    title: 'folder/ListBox',
    component: ListBox,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const LightListBox: Story = {
    args: {},
};

export const DarkListBox: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.DARK)],
};
