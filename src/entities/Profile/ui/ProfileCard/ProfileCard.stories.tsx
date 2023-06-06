import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook';
import { Theme } from 'app/providers/ThemeProvider';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import AvatarPng from 'shared/assets/tests/storybook.png';
import { ProfileCard } from './ProfileCard';

const meta: Meta<typeof ProfileCard> = {
    title: 'entities/ProfileCard',
    component: ProfileCard,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const ProfileCardDefaultLightTheme: Story = {
    args: {
        data: {
            firstname: 'Anton',
            lastname: 'Makushenko',
            age: 17,
            currency: Currency.UAH,
            country: Country.Ukraine,
            city: 'Cherkasy',
            username: 'admin',
            avatar: AvatarPng,
        },
    },
};

export const ProfileCardWithErrorLightTheme: Story = {
    args: {
        error: 'error',
    },
};

export const ProfileCardWithLoadingLightTheme: Story = {
    args: {
        error: 'error',
    },
};

export const ProfileCardDefaultDarkTheme: Story = {
    args: {
        data: {
            firstname: 'Anton',
            lastname: 'Makushenko',
            age: 17,
            currency: Currency.UAH,
            country: Country.Ukraine,
            city: 'Cherkasy',
            username: 'admin',
            avatar: AvatarPng,
        },
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const ProfileCardWithErrorDarkTheme: Story = {
    args: {
        error: 'error',
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const ProfileCardWithLoadingDarkTheme: Story = {
    args: {
        error: 'error',
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};
