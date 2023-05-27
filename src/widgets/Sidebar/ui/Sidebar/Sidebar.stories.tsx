import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Sidebar } from './Sidebar';

const meta: Meta<typeof Sidebar> = {
    title: 'widgets/Sidebar',
    component: Sidebar,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const LightSidebar: Story = {
    args: {
    },
};

export const DarkSidebar: Story = {
    args: {
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};
