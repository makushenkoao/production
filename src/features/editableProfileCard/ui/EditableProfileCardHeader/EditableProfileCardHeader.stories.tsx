import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook';
import { Theme } from 'app/providers/ThemeProvider';
import { EditableProfileCardHeader } from './EditableProfileCardHeader';

// TODO - write stories

const meta: Meta<typeof EditableProfileCardHeader> = {
    title: 'features/EditableProfileCard/EditableProfileCardHeader',
    component: EditableProfileCardHeader,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const LightEditableProfileCardHeader: Story = {
    args: {},
};

export const DarkEditableProfileCardHeader: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.DARK)],
};
