import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { NotFoundPage } from './NotFoundPage';

const meta: Meta<typeof NotFoundPage> = {
    title: 'widgets/NotFoundPage',
    component: NotFoundPage,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const LightNotFoundPage: Story = {
    args: {
    },
};

export const DarkNotFoundPage: Story = {
    args: {
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};
