import { classNames } from './classNames';

describe('Tests for classNames help function', () => {
    test('with only main class', () => {
        const expected = 'main';
        expect(classNames('main', {}, [])).toBe(expected);
    });

    test('with main class and additional class', () => {
        const expected = 'main add#1';
        expect(classNames('main', {}, ['add#1'])).toBe(expected);
    });

    test('with main class and several additional classes', () => {
        const expected = 'main add#1 add#2';
        expect(classNames('main', {}, ['add#1', 'add#2'])).toBe(expected);
    });

    test('with main class, several additional classes, true mod class', () => {
        const expected = 'main add#1 add#2 mod#1';
        expect(classNames('main', { 'mod#1': true }, ['add#1', 'add#2'])).toBe(expected);
    });

    test('with main class, several additional classes, true mod classes, false mod class', () => {
        const expected = 'main add#1 add#2 mod#1 mod#3';
        expect(classNames('main', { 'mod#1': true, 'mod#2': false, 'mod#3': true }, ['add#1', 'add#2'])).toBe(expected);
    });

    test('with main class, several additional classes, true mod classes, false mod class, undefined mod class', () => {
        const expected = 'main add#1 add#2 mod#1 mod#3 mod#5';
        expect(
            classNames(
                'main',
                {
                    'mod#1': true, 'mod#2': false, 'mod#3': true, 'mod#4': undefined, 'mod#5': true,
                },
                ['add#1', 'add#2'],
            ),
        ).toBe(expected);
    });
});
