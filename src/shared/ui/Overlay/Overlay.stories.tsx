import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook';
import { Theme } from 'app/providers/ThemeProvider';
import { Overlay } from './Overlay';

// TODO - write stories

const meta: Meta<typeof Overlay> = {
    title: 'folder/Overlay',
    component: Overlay,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const LightOverlay: Story = {
    args: {},
};

export const DarkOverlay: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.DARK)],
};
