import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook';
import { Theme } from 'app/providers/ThemeProvider';
import { Modal } from './Modal';

const meta: Meta<typeof Modal> = {
    title: 'shared/Modal',
    component: Modal,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const LightModal: Story = {
    args: {
        children: 'Modal',
        isOpen: true,
    },
};

export const DarkModal: Story = {
    args: {
        children: 'Modal',
        isOpen: true,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};
