import type { Preview } from '@storybook/react';
import {
    StyleDecorator,
    ThemeDecorator,
    RouterDecorator,
    SuspenseDecorator,
} from '../../src/shared/config/storybook';
import 'app/styles/index.scss';
import { Theme } from '../../src/shared/const/theme';

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
        // @ts-ignore
        StyleDecorator,
        ThemeDecorator(Theme.LIGHT),
        RouterDecorator,
        SuspenseDecorator,
    ],
};

export default preview;
