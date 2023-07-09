import type { Meta, StoryObj } from '@storybook/react';
import { AppLogo } from './AppLogo';

// TODO - Write stories

const meta: Meta<typeof AppLogo> = {
    title: 'shared/ui/redesigned/Button',
    component: AppLogo,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {},
};
