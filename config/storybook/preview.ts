import type { Preview } from '@storybook/react';
import {
    StyleDecorator,
    ThemeDecorator,
    RouterDecorator,
} from '../../src/shared/config/storybook';
import { Theme } from '../../src/app/providers/ThemeProvider';
import 'app/styles/index.scss';

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
    ],
};

export default preview;
