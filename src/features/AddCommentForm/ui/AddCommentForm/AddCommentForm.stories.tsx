import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { ThemeDecorator } from 'shared/config/storybook';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/decorators/StoreDecorator';
import AddCommentForm from './AddCommentForm';

// TODO - write stories

const meta: Meta<typeof AddCommentForm> = {
    title: 'feature/AddCommentForm',
    component: AddCommentForm,
    args: {
        onSendComment: action('onSendComment'),
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const LightAddCommentForm: Story = {
    args: {
    },
    decorators: [StoreDecorator({})],
};

export const DarkAddCommentForm: Story = {
    args: {},
    decorators: [StoreDecorator({}), ThemeDecorator(Theme.DARK)],
};
