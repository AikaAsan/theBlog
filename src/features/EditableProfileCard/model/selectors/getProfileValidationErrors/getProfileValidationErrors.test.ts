import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileValidationErrors } from './getProfileValidationErrors';
import { ValidationProfileError } from '../../types/EditableProfileCardSchema';

describe('getProfileIsLoading.test', () => {
    test('should return filled state', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                validationErrors: [
                    ValidationProfileError.SERVER_ERROR,
                    ValidationProfileError.INCORRECT_AGE,
                ],
            },
        };
        expect(getProfileValidationErrors(state as StateSchema)).toEqual([
            ValidationProfileError.SERVER_ERROR,
            ValidationProfileError.INCORRECT_AGE,
        ]);
    });
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileValidationErrors(state as StateSchema)).toEqual(
            undefined
        );
    });
});
