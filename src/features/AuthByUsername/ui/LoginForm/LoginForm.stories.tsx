import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/decorators/StoreDecorator';
import { LoginForm } from './LoginForm';

const meta: Meta<typeof LoginForm> = {
    title: 'features/LoginForm',
    component: LoginForm,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const LightLoginForm: Story = {
    args: {
    },
    decorators: [StoreDecorator({
        loginForm: { username: '123', password: 'asd', error: 'ERROR' },
    })],
};

export const DarkLoginForm: Story = {
    args: {
    },
    decorators: [ThemeDecorator(Theme.DARK), StoreDecorator({
        loginForm: { isLoading: true },
    })],
};
