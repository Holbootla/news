import { getArticleData } from './getArticleData';
import { StateSchema } from '@/app/providers/StoreProvider';
import { articleDataMock } from '../../mocks/articleDataMock';

describe('getArticleData', () => {
    test('should return articleData state', () => {
        const state:DeepPartial<StateSchema> = {
            article: {
                data: articleDataMock,
            },
        };
        expect(getArticleData(state as StateSchema)).toEqual(articleDataMock);
    });

    test('should work with empty state', () => {
        const state:DeepPartial<StateSchema> = {};
        expect(getArticleData(state as StateSchema)).toEqual(undefined);
    });
});
