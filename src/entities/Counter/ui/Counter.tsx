import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { counterActions } from '../model/slice/counterSlice';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';
import { AppButton } from '@/shared/ui';
import { useAppDispatch } from '@/shared/lib';

export const Counter = memo(() => {
    const { t } = useTranslation();

    const dispatch = useAppDispatch();
    const counterValue = useSelector(getCounterValue);

    const increment = () => {
        dispatch(counterActions.increment());
    };

    const decrement = () => {
        dispatch(counterActions.decrement());
    };

    return (
        <div data-testid="counter">
            <h1 data-testid="counterValue">{counterValue}</h1>
            <AppButton
                data-testid="incrementBtn"
                onClick={increment}
            >
                {t('increment')}
            </AppButton>
            <AppButton
                data-testid="decrementBtn"
                onClick={decrement}
            >
                {t('decrement')}
            </AppButton>
        </div>
    );
});
