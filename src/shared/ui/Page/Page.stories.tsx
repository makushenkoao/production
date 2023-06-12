import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook';
import { Theme } from 'app/providers/ThemeProvider';
import { Page } from './Page';

const meta: Meta<typeof Page> = {
    title: 'folder/Page',
    component: Page,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const LightPage: Story = {
    args: {},
};

export const DarkPage: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.DARK)],
};
