import { StateSchema } from 'app/providers/StoreProvider';
import {
    getAddCommentFormText,
    getAddCommentFormError,
} from './addCommentFormSelectors';

describe('addCommentForm.test', () => {
    test('should return text', () => {
        const state: DeepPartial<StateSchema> = {
            addCommentForm: {
                text: 'text text',
            },
        };
        expect(getAddCommentFormText(state as StateSchema)).toEqual(
            'text text'
        );
    });
    test('should work with empty text state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getAddCommentFormText(state as StateSchema)).toEqual('');
    });
    test('should return error', () => {
        const state: DeepPartial<StateSchema> = {
            addCommentForm: {
                error: 'error',
            },
        };
        expect(getAddCommentFormError(state as StateSchema)).toEqual('error');
    });
    test('should work with empty error state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getAddCommentFormError(state as StateSchema)).toEqual(undefined);
    });
});
