import { userActions } from '../slice/userSlice';
import { StateSchema } from 'app/providers/StoreProvider';

import { UserSchema } from '../types/user';
import { userReducer } from './userSlice';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localstorage';

describe('userSlice.test', () => {
    test('should set initialized true ', () => {
        const state: DeepPartial<StateSchema> = {
            user: {
                _initialized: true,
            },
        };

        expect(
            userReducer(state as UserSchema, userActions.initAuthData)
                ._initialized
        ).toEqual(true);
    });
    test('should set AuthData', () => {
        const state: DeepPartial<UserSchema> = {
            authData: { id: '1', username: 'admin' },
        };
        expect(
            userReducer(
                state as UserSchema,
                userActions.setAuthData({
                    id: '1',
                    username: 'admin',
                })
            )
        ).toEqual({
            authData: { id: '1', username: 'admin' },
        });
    });
    test('logout. should set authData to undefined and remove local storage value on', () => {
        const state: DeepPartial<UserSchema> = {
            authData: { id: '1', username: 'admin' },
        };
        localStorage.setItem(
            USER_LOCALSTORAGE_KEY,
            JSON.stringify({ id: '1', username: 'admin' })
        );
        expect(
            userReducer(state as UserSchema, userActions.logout).authData
        ).toEqual(undefined);
        expect(localStorage.getItem(USER_LOCALSTORAGE_KEY)).toBeNull();
    });
});
