import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook';
import { Theme } from 'app/providers/ThemeProvider';
import { Flex } from './Flex';

// TODO - write stories

const meta: Meta<typeof Flex> = {
    title: 'shared/Flex',
    component: Flex,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const LightFlex: Story = {
    args: {},
};

export const DarkFlex: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.DARK)],
};
