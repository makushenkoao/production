import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook';
import { Theme } from 'app/providers/ThemeProvider';
import { Modal } from './Modal';

const meta: Meta<typeof Modal> = {
    title: 'shared/Modal',
    component: Modal,
    args: {
        children: 'Modal',
        isOpen: true,
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const LightModal: Story = {
    args: {
    },
};

export const DarkModal: Story = {
    args: {
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const OrangeModal: Story = {
    args: {
    },
    decorators: [ThemeDecorator(Theme.ORANGE)],
};
