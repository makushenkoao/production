import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook';
import { Theme } from 'app/providers/ThemeProvider';
import { EditableProfileCard } from './EditableProfileCard';

const meta: Meta<typeof EditableProfileCard> = {
    title: 'features/EditableProfileCard/EditableProfileCard',
    component: EditableProfileCard,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const LightEditableProfileCard: Story = {
    args: {},
};

export const DarkEditableProfileCard: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.DARK)],
};
