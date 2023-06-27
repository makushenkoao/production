import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { ThemeDecorator } from '@/shared/config/storybook';
import { StarRating } from './StarRating';
import { Theme } from '@/shared/const/theme';

const meta: Meta<typeof StarRating> = {
    title: 'shared/StarRating',
    component: StarRating,
    args: {
        size: 30,
        selectedStars: 3,
        onSelect: action('onSelect'),
    },
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

export const OrangeStarRating: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.ORANGE)],
};
