import { fetchArticlesList } from './../fetchArticlesList/fetchArticlesList';
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { initArticlesPage } from './initArticlesPage';
import { ArticleView } from 'entities/Article/model/types/article';

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
            },
        });

        await thunk.callThunk();

        expect(thunk.dispatch).toBeCalledTimes(4);
        expect(fetchArticlesList).toHaveBeenCalledWith({ page: 1 });
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

        await thunk.callThunk();

        expect(thunk.dispatch).toBeCalledTimes(2);
        expect(fetchArticlesList).not.toHaveBeenCalled();
    });
});
