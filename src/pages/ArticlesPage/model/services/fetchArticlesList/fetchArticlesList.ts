import {
    getArticlesPageSort,
    getArticlesPageOrder,
    getArticlesPageSearch,
    getArticlesPageNumber,
    getArticlesPageType,
} from './../../selectors/articlePageSelectors';
import { Article, ArticleType } from 'entities/Article';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { getArticlesPageLimit } from '../../selectors/articlePageSelectors';
import { addQueryParams } from 'shared/lib/url/addQueryParams/addQueryParams';

interface FetchArticlesListProps {
    replace?: boolean;
}

//async Thunk
export const fetchArticlesList = createAsyncThunk<
    Article[],
    FetchArticlesListProps,
    ThunkConfig<string>
>('articlesPage/fetchArticlesList', async (props, thunkAPI) => {
    const { extra, rejectWithValue, getState } = thunkAPI;
    const limit = getArticlesPageLimit(getState());
    const sort = getArticlesPageSort(getState());
    const order = getArticlesPageOrder(getState());
    const search = getArticlesPageSearch(getState());
    const page = getArticlesPageNumber(getState());
    const type = getArticlesPageType(getState());

    try {
        addQueryParams({
            sort,
            order,
            search,
            type,
        });
        const response = await extra.api.get<Article[]>('/articles', {
            params: {
                _expand: 'user',
                _limit: limit,
                _page: page,
                _sort: sort,
                _order: order,
                q: search,
                type: type === ArticleType.ALL ? undefined : type,
            },
        });

        if (!response.data) {
            throw new Error();
        }

        return response.data;
    } catch (e) {
        console.log(e);
        return rejectWithValue('error');
    }
});
