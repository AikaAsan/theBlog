import { AddCommentFormSchema } from '../types/addCommentform';
import {
    addCommentFormActions,
    addCommentFormReducer,
} from './addCommentFormSlice';

describe('addCommentFormSlice.test', () => {
    test('test set text', () => {
        const state: DeepPartial<AddCommentFormSchema> = {
            text: 'text text',
        };

        expect(
            addCommentFormReducer(
                state as AddCommentFormSchema,
                addCommentFormActions.setText('text text')
            )
        ).toEqual({ text: 'text text' });
    });
});
