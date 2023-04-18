import { StateSchema } from 'app/providers/StoreProvider';

export const getArticleDetailsCommentsisLoading = (state: StateSchema) =>
    state.articleDetailsComments?.isLoading;

export const getArticleDetailsCommentsError = (state: StateSchema) =>
    state.articleDetailsComments?.error;
