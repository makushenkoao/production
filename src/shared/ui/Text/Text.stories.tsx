import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import {
    Text, TextAlign, TextSize, TextTheme,
} from './Text';

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

export const OrangeText: Story = {
    args: {
        title: 'Title',
        text: 'Text',
    },
    decorators: [ThemeDecorator(Theme.ORANGE)],
};

export const OnlyText: Story = {
    args: {
        text: 'Text',
    },
};

export const LOnlyTitle: Story = {
    args: {
        title: 'Title',
    },
};

export const ErrorText: Story = {
    args: {
        title: 'Error',
        text: 'An error has occurred because...',
        theme: TextTheme.ERROR,
    },
};

export const SizeS: Story = {
    args: {
        title: 'Size S',
        size: TextSize.S,
        text: 'Random text',
    },
};

export const SizeM: Story = {
    args: {
        title: 'Size M',
        size: TextSize.M,
        text: 'Random text',
    },
};

export const SizeL: Story = {
    args: {
        title: 'Size M',
        size: TextSize.L,
        text: 'Random text',
    },
};

export const AlignLeft: Story = {
    args: {
        title: 'Size M',
        size: TextSize.M,
        align: TextAlign.LEFT,
        text: 'Random text',
    },
};

export const AlignCenter: Story = {
    args: {
        title: 'Size M',
        size: TextSize.M,
        align: TextAlign.CENTER,
        text: 'Random text',
    },
};

export const AlignEnd: Story = {
    args: {
        title: 'Size M',
        size: TextSize.M,
        align: TextAlign.RIGHT,
        text: 'Random text',
    },
};
