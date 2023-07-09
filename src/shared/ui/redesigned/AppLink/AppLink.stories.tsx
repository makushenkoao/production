import type { Meta, StoryObj } from '@storybook/react';
import { AppLink } from './AppLink';

// TODO - write stories

const meta: Meta<typeof AppLink> = {
    title: 'shared/ui/redesigned/AppLink',
    component: AppLink,
    // args: {
    //     to: '/',
    // },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        children: 'Light Primary',
    },
};
