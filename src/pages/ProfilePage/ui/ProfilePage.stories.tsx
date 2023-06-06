import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/decorators/StoreDecorator';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import ProfilePage from './ProfilePage';

const meta: Meta<typeof ProfilePage> = {
    title: 'pages/ProfilePage',
    component: ProfilePage,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const LightProfilePage: Story = {
    args: {
    },
    decorators: [StoreDecorator({
        profile: {
            form: {
                firstname: 'Anton',
                lastname: 'Makushenko',
                age: 17,
                currency: Currency.UAH,
                country: Country.Ukraine,
                city: 'Cherkasy',
                username: 'admin',
            },
        },
    })],
};

export const DarkProfilePage: Story = {
    args: {
    },
    decorators: [ThemeDecorator(Theme.DARK), StoreDecorator({
        profile: {
            form: {
                firstname: 'Anton',
                lastname: 'Makushenko',
                age: 17,
                currency: Currency.UAH,
                country: Country.Ukraine,
                city: 'Cherkasy',
                username: 'admin',
            },
        },
    })],
};
