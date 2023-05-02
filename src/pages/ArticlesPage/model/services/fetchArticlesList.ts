import { Article } from 'entities/Article';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { createAsyncThunk } from '@reduxjs/toolkit';

//async Thunk
export const fetchArticlesList = createAsyncThunk<
    Article[],
    void,
    ThunkConfig<string>
>('articlesPage/fetchArticlesList', async (articleId, thunkAPI) => {
    const { extra, rejectWithValue } = thunkAPI;

    try {
        const response = await extra.api.get<Article[]>('/articles', {
            params: {
                _expand: 'user',
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
