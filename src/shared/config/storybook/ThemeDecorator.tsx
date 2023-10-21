import { Story } from '@storybook/react';
import { Theme } from '@/shared/types';

export const ThemeDecorator = (theme: Theme) => (StoryComponent: Story) => {
    document.body.setAttribute('data-theme', theme);

    return (
        <div className='app'>
            <StoryComponent />
        </div>
    );
};
