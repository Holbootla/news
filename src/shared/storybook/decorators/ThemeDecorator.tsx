import { Story } from '@storybook/react';
import { ThemeType } from '@/shared/ThemeProvider/lib/ThemeContext';
import '@/app/styles/index.scss';

export const ThemeDecorator = (theme:ThemeType) => function fn(StoryComponent:Story) {
    return (
        <div className={`App ${theme}`}>
            <StoryComponent />
        </div>
    );
};
