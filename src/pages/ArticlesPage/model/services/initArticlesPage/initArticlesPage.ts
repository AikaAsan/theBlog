import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';
import { getArticlesPageInitialized } from '../../selectors/articlePageSelectors';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { articlesPageActions } from '../../slices/articlesPageSlice';

//async Thunk
export const initArticlesPage = createAsyncThunk<
    void,
    void,
    ThunkConfig<string>
>('articlesPage/initArticlesPage', async (_, thunkAPI) => {
    const { getState, dispatch } = thunkAPI;

    //inside async Thunk using getState with selectors instead of useSelector
    const initialized = getArticlesPageInitialized(getState());

    if (!initialized) {
        dispatch(articlesPageActions.initialState());
        dispatch(
            fetchArticlesList({
                page: 1,
            })
        );
    }
});
