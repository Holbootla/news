import { Story } from '@storybook/react';
import { Theme } from '@/shared/ThemeProvider/lib/ThemeContext';
import '@/app/styles/index.scss';

export const ThemeDecorator = (theme:Theme) => function fn(StoryComponent:Story) {
    return (
        <div className={`App ${theme}`}>
            <StoryComponent />
        </div>
    );
};
