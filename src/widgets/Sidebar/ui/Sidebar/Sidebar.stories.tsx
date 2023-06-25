import type { Meta, StoryObj } from '@storybook/react';
import { StoreDecorator } from '@/shared/config/storybook/decorators/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import { Sidebar } from './Sidebar';

const meta: Meta<typeof Sidebar> = {
    title: 'widgets/Sidebar',
    component: Sidebar,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const LightSidebarAuth: Story = {
    args: {
    },
    decorators: [StoreDecorator({
        user: {
            authData: {},
        },
    })],
};

export const LightSidebarNoAuth: Story = {
    args: {
    },
    decorators: [StoreDecorator({
        user: {},
    })],
};

export const DarkSidebarAuth: Story = {
    args: {
    },
    decorators: [StoreDecorator({
        user: {
            authData: {},
        },
    }), ThemeDecorator(Theme.DARK)],
};

export const DarkSidebarNoAuth: Story = {
    args: {
    },
    decorators: [StoreDecorator({
        user: {},
    }), ThemeDecorator(Theme.DARK)],
};

export const OrangeSidebarAuth: Story = {
    args: {
    },
    decorators: [StoreDecorator({
        user: {
            authData: {},
        },
    }), ThemeDecorator(Theme.ORANGE)],
};

export const OrangeSidebarNoAuth: Story = {
    args: {
    },
    decorators: [StoreDecorator({
        user: {},
    }), ThemeDecorator(Theme.ORANGE)],
};
