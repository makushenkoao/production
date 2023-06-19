import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook';
import { Theme } from 'app/providers/ThemeProvider';
import { Skeleton } from './Skeleton';

const meta: Meta<typeof Skeleton> = {
    title: 'shared/Skeleton',
    component: Skeleton,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultLight: Story = {
    args: {
        width: '100%',
        height: 200,
    },
};

export const CircleLight: Story = {
    args: {
        borderRadius: '50%',
        height: 100,
        width: 100,
    },
};

export const DefaultDark: Story = {
    args: {
        width: '100%',
        height: 200,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const CircleDark: Story = {
    args: {
        borderRadius: '50%',
        height: 100,
        width: 100,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};
