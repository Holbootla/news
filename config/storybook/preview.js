import { addDecorator } from '@storybook/react';
import { RouterDecorator, ThemeDecorator } from '../../src/shared/storybook';
import { Theme } from '../../src/shared/ThemeProvider/lib/ThemeContext';

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
};

addDecorator(ThemeDecorator(Theme.LIGHT));
addDecorator(RouterDecorator);
