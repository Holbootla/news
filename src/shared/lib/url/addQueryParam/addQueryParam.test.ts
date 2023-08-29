import { getQueryParams } from './addQueryParam';

describe('shared/lib/addQueryParams', () => {
    test('one param', () => {
        const params = getQueryParams({
            key1: 'value',
        });
        expect(params).toBe('key1=value');
    });
    test('multiple params', () => {
        const params = getQueryParams({
            key1: 'value1',
            key2: 'value2',
        });
        expect(params).toBe('key1=value1&key2=value2');
    });
    test('empty param', () => {
        const params = getQueryParams({
            key1: 'value1',
            key2: '',
        });
        expect(params).toBe('key1=value1');
    });
});
