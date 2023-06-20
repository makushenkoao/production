import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook';
import { Theme } from 'app/providers/ThemeProvider';
import { AdminPanelPage } from './AdminPanelPage';

const meta: Meta<typeof AdminPanelPage> = {
    title: 'pages/Article/ArticleEditPage',
    component: AdminPanelPage,
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
