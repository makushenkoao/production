import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Navbar } from './Navbar';

const meta: Meta<typeof Navbar> = {
    title: 'widgets/Navbar',
    component: Navbar,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const LightNavbar: Story = {
    args: {
    },
};

export const DarkNavbar: Story = {
    args: {
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};
