import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Input } from './Input';

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

export const OrangeInput: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.ORANGE)],
};
