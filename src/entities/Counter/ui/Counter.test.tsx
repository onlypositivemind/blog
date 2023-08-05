import { DeepPartial } from '@reduxjs/toolkit';
import { fireEvent, screen } from '@testing-library/react';
import { StateSchema } from '@/app/providers/StoreProvider';
import { componentRender } from '@/shared/lib/tests/componentRender';
import { Counter } from './Counter';

const initialState: DeepPartial<StateSchema> = {
    counter: { value: 7 },
};

describe('Counter component', () => {
    test('Should render count value', () => {
        componentRender(<Counter />, {
            initialState,
        });

        const counterText = screen.getByTestId('counterText');
        expect(counterText).toHaveTextContent('7');
    });

    test('Increment', () => {
        componentRender(<Counter />, {
            initialState,
        });

        const counterText = screen.getByTestId('counterText');
        const incrementBtn = screen.getByTestId('incrementBtn');

        fireEvent.click(incrementBtn);
        expect(counterText).toHaveTextContent('8');
    });

    test('Decrement', () => {
        componentRender(<Counter />, {
            initialState,
        });

        const counterText = screen.getByTestId('counterText');
        const decrementBtn = screen.getByTestId('decrementBtn');

        fireEvent.click(decrementBtn);
        expect(counterText).toHaveTextContent('6');
    });
});
