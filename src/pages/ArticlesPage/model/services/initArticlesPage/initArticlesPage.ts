import {
    ArticleSortField,
    ArticleType,
} from 'entities/Article/model/types/article';
import { SortOrder } from 'shared/types/index';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';
import { getArticlesPageInitialized } from '../../selectors/articlePageSelectors';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { articlesPageActions } from '../../slices/articlesPageSlice';

//async Thunk
export const initArticlesPage = createAsyncThunk<
    void,
    URLSearchParams,
    ThunkConfig<string>
>('articlesPage/initArticlesPage', async (searchParams, thunkAPI) => {
    const { getState, dispatch } = thunkAPI;

    //inside async Thunk using getState with selectors instead of useSelector
    const initialized = getArticlesPageInitialized(getState());

    if (!initialized) {
        const orderFromUrl = searchParams.get('order') as SortOrder;
        const sortFromUrl = searchParams.get('sort') as ArticleSortField;
        const searchFromUrl = searchParams.get('search');
        const typeFromUrl = searchParams.get('type') as ArticleType;
        if (orderFromUrl) {
            dispatch(articlesPageActions.setOrder(orderFromUrl));
        }
        if (sortFromUrl) {
            dispatch(articlesPageActions.setSort(sortFromUrl));
        }
        if (searchFromUrl) {
            dispatch(articlesPageActions.setSearch(searchFromUrl));
        }
        if (typeFromUrl) {
            dispatch(articlesPageActions.setType(typeFromUrl));
        }
        dispatch(articlesPageActions.initialState());
        dispatch(fetchArticlesList({}));
    }
});
