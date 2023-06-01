import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Text, TextTheme } from './Text';

const meta: Meta<typeof Text> = {
    title: 'shared/Text',
    component: Text,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const LightText: Story = {
    args: {
        title: 'Title',
        text: 'Text',
    },
};

export const DarkText: Story = {
    args: {
        title: 'Title',
        text: 'Text',
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const LightOnlyText: Story = {
    args: {
        text: 'Text',
    },
};

export const LightOnlyTitle: Story = {
    args: {
        title: 'Title',
    },
};

export const DarkOnlyText: Story = {
    args: {
        text: 'Text',
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const DarkOnlyTitle: Story = {
    args: {
        title: 'Title',
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const LightErrorText: Story = {
    args: {
        title: 'Error',
        text: 'An error has occurred because...',
        theme: TextTheme.ERROR,
    },
};

export const DarkErrorText: Story = {
    args: {
        title: 'Error',
        text: 'An error has occurred because...',
        theme: TextTheme.ERROR,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};
