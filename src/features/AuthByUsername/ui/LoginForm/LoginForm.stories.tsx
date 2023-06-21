import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/decorators/StoreDecorator';
import LoginForm from './LoginForm';

const loginForm = { username: 'admin', password: 'admin' };
const loginFormError = { ...loginForm, error: 'error' };
const loginFormLoading = { ...loginForm, isLoading: true };

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
        loginForm,
    })],
};

export const DarkLoginForm: Story = {
    args: {
    },
    decorators: [StoreDecorator({
        loginForm,
    }), ThemeDecorator(Theme.DARK)],
};

export const OrangeLoginForm: Story = {
    args: {
    },
    decorators: [StoreDecorator({
        loginForm,
    }), ThemeDecorator(Theme.ORANGE)],
};

export const LightLoginFormError: Story = {
    args: {
    },
    decorators: [StoreDecorator({
        loginForm: loginFormError,
    })],
};

export const DarkLoginFormError: Story = {
    args: {
    },
    decorators: [StoreDecorator({
        loginForm: loginFormError,
    }), ThemeDecorator(Theme.DARK)],
};

export const OrangeLoginFormError: Story = {
    args: {
    },
    decorators: [StoreDecorator({
        loginForm: loginFormError,
    }), ThemeDecorator(Theme.ORANGE)],
};

export const LightLoginFormLoading: Story = {
    args: {
    },
    decorators: [StoreDecorator({
        loginForm: loginFormLoading,
    })],
};

export const DarkLoginFormLoading: Story = {
    args: {
    },
    decorators: [ThemeDecorator(Theme.DARK), StoreDecorator({
        loginForm: loginFormLoading,
    })],
};

export const OrangeLoginFormLoading: Story = {
    args: {
    },
    decorators: [ThemeDecorator(Theme.ORANGE), StoreDecorator({
        loginForm: loginFormLoading,
    })],
};
