import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook';
import { Theme } from '@/app/providers/ThemeProvider';
import { StoreDecorator } from '@/shared/config/storybook/decorators/StoreDecorator';
import AdminPanelPage from './AdminPanelPage';

const meta: Meta<typeof AdminPanelPage> = {
    title: 'pages/AdminPanelPage',
    component: AdminPanelPage,
    decorators: [StoreDecorator({})],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const LightAdminPanelPage: Story = {
    args: {},
};

export const DarkAdminPanelPage: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const OrangeAdminPanelPage: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.ORANGE)],
};
