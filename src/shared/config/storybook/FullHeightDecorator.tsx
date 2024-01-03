import { Story } from '@storybook/react';

export const FullHeightDecorator = (StoryComponent: Story) => (
    <div style={{ height: '100vh' }}>
        <StoryComponent />
    </div>
);
