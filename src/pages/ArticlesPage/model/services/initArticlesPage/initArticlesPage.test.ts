import { fetchArticlesList } from './../fetchArticlesList/fetchArticlesList';
import { TestAsyncThunk } from '@/shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { initArticlesPage } from './initArticlesPage';
import {
    ArticleSortField,
    ArticleView,
} from '@/entities/Article';
import { URLSearchParams } from 'url';

jest.mock('../fetchArticlesList/fetchArticlesList');

describe('initArticlesPage.test', () => {
    test('initArticlesPage is called when _initialized false', async () => {
        const thunk = new TestAsyncThunk(initArticlesPage, {
            articlesPage: {
                isLoading: false,
                error: undefined,
                ids: [],
                entities: {},
                view: ArticleView.GRID,
                page: 1,
                hasMore: true,
                _initialized: false,
                order: 'asc',
                sort: ArticleSortField.CREATED,
                search: '',
            },
        });

        await thunk.callThunk(new URLSearchParams());

        expect(thunk.dispatch).toBeCalledTimes(4);
        expect(fetchArticlesList).toHaveBeenCalled();
    });

    test('initArticlesPage not called when _initialized true', async () => {
        const thunk = new TestAsyncThunk(initArticlesPage, {
            articlesPage: {
                isLoading: false,
                error: undefined,
                ids: [],
                entities: {},
                view: ArticleView.GRID,
                page: 1,
                hasMore: true,
                _initialized: true,
            },
        });

        await thunk.callThunk(new URLSearchParams());

        expect(thunk.dispatch).toBeCalledTimes(2);
        expect(fetchArticlesList).not.toHaveBeenCalled();
    });
});
