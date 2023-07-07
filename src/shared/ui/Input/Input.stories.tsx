import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator';
import { Input } from './Input';
import { Theme } from '@/shared/const/theme';

const meta: Meta<typeof Input> = {
    title: 'shared/Input',
    component: Input,
    args: {
        placeholder: 'Placeholder',
        value: 'Value',
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const LightInput: Story = {
    args: {},
};

export const DarkInput: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.DARK)],
};
