import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook';
import { StarRating } from './StarRating';
import { Theme } from '@/shared/const/theme';

// TODO - write stories

const meta: Meta<typeof StarRating> = {
    title: 'folder/StarRating',
    component: StarRating,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const LightStarRating: Story = {
    args: {},
};

export const DarkStarRating: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.DARK)],
};
