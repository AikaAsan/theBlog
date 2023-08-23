
import axios from 'axios';

import { TestAsyncThunk } from '@/shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { ArticleType, ArticleBlockType } from '../../consts/articleConsts';
import { fetchArticleById } from './fetchArticleById';

const data = {
    id: 1,
    title: 'Some Title',
    subtitle: 'Some subtitle',
    img: 'imng',
    views: 100,
    createdAt: 'December 25',
    type: ArticleType.IT,
    blocks: ArticleBlockType.TEXT,
};
const dataId = String(data.id)

describe('fetchArtcileById.test', () => {
    test('success', async () => {
        const thunk = new TestAsyncThunk(fetchArticleById);

        thunk.api.get.mockReturnValue(Promise.resolve({ data }));
        const result = await thunk.callThunk(dataId);

        expect(thunk.api.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(data);
    });
    test('failed fetch profile data', async () => {
        const thunk = new TestAsyncThunk(fetchArticleById);

        thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));

        const result = await thunk.callThunk('3');

        expect(result.meta.requestStatus).toBe('rejected');
    });
});
