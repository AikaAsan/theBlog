import { Story } from '@storybook/react';
import { StateSchema, StoreProvider } from '@/app/providers/StoreProvider';
import { articleDetailsReducer } from '@/entities/Article';

import { addCommentFormReducer } from '@/features/AddCommentForm';
import { loginReducer } from '@/features/AuthByUsername';
import { profileReducer } from '@/features/EditableProfileCard';
import { articleDetailsPageReducer } from '@/pages/ArticleDetailsPage';
import { ReducersList } from '@/shared/components/DynamicModuleLoader/DynamicModuleLoader';

const defaultAsyncReducers: ReducersList = {
    loginForm: loginReducer,
    profile: profileReducer,
    articleDetails: articleDetailsReducer,
    addCommentForm: addCommentFormReducer,
    articleDetailsPage: articleDetailsPageReducer,
};
export const StoreDecorator =
    (state: DeepPartial<StateSchema>, asyncReducers?: ReducersList) =>
        (StoryComponent: Story) =>
            (
                <StoreProvider
                    initialState={state}
                    asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}
                >
                    <StoryComponent />
                </StoreProvider>
            );
