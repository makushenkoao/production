import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { AppLink, AppLinkTheme } from './AppLink';

const meta: Meta<typeof AppLink> = {
    title: 'widgets/AppLink',
    component: AppLink,
    args: {
        to: '/',
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const LightPrimary: Story = {
    args: {
        children: 'Light Primary',
        theme: AppLinkTheme.PRIMARY,
    },
    decorators: [ThemeDecorator(Theme.LIGHT)],
};

export const DarkPrimary: Story = {
    args: {
        children: 'Dark Primary',
        theme: AppLinkTheme.PRIMARY,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const LightSecondary: Story = {
    args: {
        children: 'Light Secondary',
        theme: AppLinkTheme.SECONDARY,
    },
    decorators: [ThemeDecorator(Theme.LIGHT)],
};

export const DarkSecondary: Story = {
    args: {
        children: 'Dark Secondary',
        theme: AppLinkTheme.SECONDARY,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};
