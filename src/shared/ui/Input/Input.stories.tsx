import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Input } from './Input';

const meta: Meta<typeof Input> = {
    title: 'shared/Input',
    component: Input,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const LightInput: Story = {
    args: {
        placeholder: 'Placeholder',
        value: 'Value',
    },
};

export const DarkInput: Story = {
    args: {
        placeholder: 'Placeholder',
        value: 'Value',
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};
