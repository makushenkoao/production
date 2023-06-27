import type { Preview } from '@storybook/react';
import {
    StyleDecorator,
    ThemeDecorator,
    RouterDecorator,
} from '../../src/shared/config/storybook';
import 'app/styles/index.scss';
import { SuspenseDecorator } from '../../src/shared/config/storybook/decorators/SuspenseDecorator';
import { Theme } from '../../src';

const preview: Preview = {
    parameters: {
        actions: { argTypesRegex: '^on[A-Z].*' },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/,
            },
        },
    },
    decorators: [
        StyleDecorator,
        ThemeDecorator(Theme.LIGHT),
        RouterDecorator,
        SuspenseDecorator,
    ],
};

export default preview;
