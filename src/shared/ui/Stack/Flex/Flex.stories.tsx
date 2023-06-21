import type { Meta, StoryObj } from '@storybook/react';
import { Flex } from './Flex';

const meta: Meta<typeof Flex> = {
    title: 'shared/Flex',
    component: Flex,
    args: {
        children: (
            <>
                <div>first</div>
                <div>first</div>
                <div>first</div>
                <div>first</div>
            </>
        ),
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Row: Story = {
    args: {
        direction: 'row',
    },
};

export const RowGap4: Story = {
    args: {
        direction: 'row',
        gap: '4',
    },
};

export const RowGap8: Story = {
    args: {
        direction: 'row',
        gap: '8',
    },
};

export const RowGap16: Story = {
    args: {
        direction: 'row',
        gap: '16',
    },
};

export const RowGap32: Story = {
    args: {
        direction: 'row',
        gap: '32',
    },
};

export const Column: Story = {
    args: {
        direction: 'column',
    },
};

export const ColumnGap4: Story = {
    args: {
        direction: 'column',
        gap: '4',
    },
};

export const ColumnGap8: Story = {
    args: {
        direction: 'column',
        gap: '8',
    },
};

export const ColumnGap16: Story = {
    args: {
        direction: 'column',
        gap: '16',
    },
};

export const ColumnGap32: Story = {
    args: {
        direction: 'column',
        gap: '32',
    },
};

export const ColumnAlignCenter: Story = {
    args: {
        direction: 'column',
        align: 'center',
    },
};

export const ColumnAlignNormal: Story = {
    args: {
        direction: 'column',
        align: 'normal',
    },
};

export const ColumnAlignEnd: Story = {
    args: {
        direction: 'column',
        align: 'end',
    },
};

export const ColumnAlignStart: Story = {
    args: {
        direction: 'column',
        align: 'center',
    },
};

export const RowJustifyStart: Story = {
    args: {
        direction: 'row',
        justify: 'start',
    },
};

export const RowJustifyCenter: Story = {
    args: {
        direction: 'row',
        justify: 'center',
    },
};

export const RowJustifyEnd: Story = {
    args: {
        direction: 'row',
        justify: 'end',
    },
};

export const RowJustifyBetween: Story = {
    args: {
        direction: 'row',
        justify: 'between',
    },
};
