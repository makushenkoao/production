import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { PageError } from './PageError';

const meta: Meta<typeof PageError> = {
    title: 'widgets/PageError',
    component: PageError,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const LightPageError: Story = {
    args: {
    },
};

export const DarkPageError: Story = {
    args: {
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const OrangePageError: Story = {
    args: {
    },
    decorators: [ThemeDecorator(Theme.ORANGE)],
};
