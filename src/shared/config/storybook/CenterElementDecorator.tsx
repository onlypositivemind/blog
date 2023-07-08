import { Story } from '@storybook/react';

export const CenterElementDecorator = (StoryComponent: Story) => {
    return (
        <div
            style={{
                display: 'grid',
                placeItems: 'center',
                width: '100%',
                height: '100vh',
            }}
        >
            <StoryComponent />
        </div>
    );
};