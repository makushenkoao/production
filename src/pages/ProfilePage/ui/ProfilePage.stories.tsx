import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/decorators/StoreDecorator';
import ProfilePage from './ProfilePage';

// TODO fix profile page test

const meta: Meta<typeof ProfilePage> = {
    title: 'pages/ProfilePage',
    component: ProfilePage,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const LightProfilePage: Story = {
    args: {
    },
    decorators: [StoreDecorator({})],
};

export const DarkProfilePage: Story = {
    args: {
    },
    decorators: [ThemeDecorator(Theme.DARK), StoreDecorator({})],
};
