import { Story } from '@storybook/react';
import { Theme } from '@/shared/types/theme';

export const SecondaryBgColorDecorator = (theme: Theme) => (StoryComponent: Story) => {
    return (
        <div
            style={{
                backgroundColor: theme === 'light' ? '#4f7faf' : '#2b3945',
            }}
        >
            <StoryComponent />
        </div>
    );
};
