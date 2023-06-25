import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook';
import { Theme } from '@/app/providers/ThemeProvider';
import { CountrySelect } from './CountrySelect';

const meta: Meta<typeof CountrySelect> = {
    title: 'entities/CountrySelect',
    component: CountrySelect,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const LightCountrySelect: Story = {
    args: {
    },
};

export const DarkCountrySelect: Story = {
    args: {
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const OrangeCountrySelect: Story = {
    args: {
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};
