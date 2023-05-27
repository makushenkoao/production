import type { Meta, StoryObj } from '@storybook/react';
import { Button, ThemeButton } from './Button';

const meta: Meta<typeof Button> = {
    title: 'shared/Button',
    component: Button,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Clear: Story = {
    args: {
        children: 'Clear',
        theme: ThemeButton.CLEAR,
    },
};

export const Outlined: Story = {
    args: {
        children: 'Outline',
        theme: ThemeButton.OUTLINE,
    },
};
