import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import { ThemeSwitcher } from './ThemeSwitcher';

const meta: Meta<typeof ThemeSwitcher> = {
    title: 'widgets/ThemeSwitcher',
    component: ThemeSwitcher,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const LightThemeSwitcher: Story = {
    args: {
    },
};

export const DarkThemeSwitcher: Story = {
    args: {
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const OrangeThemeSwitcher: Story = {
    args: {
    },
    decorators: [ThemeDecorator(Theme.ORANGE)],
};
