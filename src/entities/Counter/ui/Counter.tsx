import { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { Button } from '@/shared/ui';
import { selectCounterValue } from '../model/selectors/counterSelectors';
import { counterActions } from '../model/slice/counterSlice';

export const Counter = () => {
    const dispatch = useAppDispatch();
    const value = useSelector(selectCounterValue);

    const handleIncrement = useCallback(() => {
        dispatch(counterActions.increment());
    }, [dispatch]);

    const handleDecrement = useCallback(() => {
        dispatch(counterActions.decrement());
    }, [dispatch]);

    return (
        <div>
            <p data-testid='counterText'>{`value: ${value}`}</p>
            <Button
                theme='primary'
                size='size_p3'
                onClick={handleIncrement}
                data-testid='incrementBtn'
            >
                {'+'}
            </Button>
            {'  '}
            <Button
                theme='primary'
                size='size_p3'
                onClick={handleDecrement}
                data-testid='decrementBtn'
            >
                {'-'}
            </Button>
        </div>
    );
};
