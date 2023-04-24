import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import {
    profileActions,
    profileReducer,
    ProfileSchema,
    updateProfileData,
    ValidationProfileError,
} from 'entities/Profile';


const data = {
    first: 'Aika',
    lastname: 'Carriere',
    city: 'Bishkek',
    currency: Currency.CAD,
    country: Country.Canada,
};
describe('profileSlice.test', () => {
    test('test set readonly', () => {
        const state: DeepPartial<ProfileSchema> = {
            readonly: false,
        };

        expect(
            profileReducer(
                state as ProfileSchema,
                profileActions.setReadonly(true)
            )
        ).toEqual({ readonly: true });
    });
    test('test cancel edit', () => {
        const state: DeepPartial<ProfileSchema> = {
            data,
            form: { username: '' },
        };
        expect(
            profileReducer(state as ProfileSchema, profileActions.cancelEdit())
        ).toEqual({
            readonly: true,
            validateErrors: undefined,
            data,
            form: data,
        });
    });
    test('test update profile', () => {
        const state: DeepPartial<ProfileSchema> = {
            form: { username: '123' },
        };
        expect(
            profileReducer(
                state as ProfileSchema,
                profileActions.updateProfile({ username: '123' })
            )
        ).toEqual({
            form: { username: '123' },
        });
    });

    // testing extra reducers
    test('test extra reducers, status pending', () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: false,
            validationErrors: [ValidationProfileError.SERVER_ERROR],
        };

        expect(
            profileReducer(state as ProfileSchema, updateProfileData.pending)
                .isLoading
        ).toBe(true);
        expect(
            profileReducer(state as ProfileSchema, updateProfileData.pending)
                .error
        ).toBe(undefined);
    });

    test('test extra reducers, status fulfilled', () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: true,
        };

        expect(
            profileReducer(
                state as ProfileSchema,
                updateProfileData.fulfilled(data, '')
            )
        ).toEqual({
            isLoading: false,
            validateErrors: undefined,
            readonly: true,
            validateError: undefined,
            form: data,
            data,
        });
    });

    //     test('test extra reducers, status rejected', () => {
    //         const state: DeepPartial<ProfileSchema> = {
    //             validationErrors: [ValidationProfileError.SERVER_ERROR],
    //         };
    //
    //         expect(
    //             profileReducer(state as ProfileSchema, updateProfileData.rejected)
    //                 .isLoading
    //         ).toBe(false);
    //
    //         expect(
    //             profileReducer(state as ProfileSchema, updateProfileData.rejected)
    //                 .error
    //         ).toBe([ValidationProfileError.SERVER_ERROR]);
    //     });
});
