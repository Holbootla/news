import { getCounterValue } from './getCounterValue';
import { StateSchema } from '@/app/providers/StoreProvider';

describe('getCounterValue', () => {
    test('should return counter value', () => {
        const state:DeepPartial<StateSchema> = { counter: { value: 5 } };
        expect(getCounterValue(state as StateSchema)).toBe(5);
    });
});
