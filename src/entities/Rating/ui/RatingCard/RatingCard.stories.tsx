import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook';
import { RatingCard } from './RatingCard';
import { Theme } from '@/shared/const/theme';

// TODO - write stories

const meta: Meta<typeof RatingCard> = {
    title: 'folder/RatingCard',
    component: RatingCard,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const LightRatingCard: Story = {
    args: {},
};

export const DarkRatingCard: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.DARK)],
};
