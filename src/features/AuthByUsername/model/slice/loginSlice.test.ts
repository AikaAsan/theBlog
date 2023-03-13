import { DeepPartial } from '@reduxjs/toolkit';
import { loginByUsername } from '../services/loginByUsername/loginByUsername';
import { LoginSchema } from '../types/loginSchema';
import { loginActions, loginReducer } from './loginSlice';

describe('loginSlice.test', () => {
    test('test set username', () => {
        const state: DeepPartial<LoginSchema> = {
            username: 'name',
        };

        expect(
            loginReducer(state as LoginSchema, loginActions.setUsername('name'))
        ).toEqual({ username: 'name' });
    });
    test('test set password', () => {
        const state: DeepPartial<LoginSchema> = {
            password: '123',
        };

        expect(
            loginReducer(state as LoginSchema, loginActions.setPassword('123'))
        ).toEqual({ password: '123' });
    });

    // testing extra reducers
    test('test extar reducers, status pending', () => {
        const state: DeepPartial<LoginSchema> = {
            password: '123',
        };

        expect(
            loginReducer(state as LoginSchema, loginByUsername.pending)
                .isLoading
        ).toBe(true);
        expect(
            loginReducer(state as LoginSchema, loginByUsername.pending).error
        ).toBe(undefined);
    });

    test('test extar reducers, sytatus fulfilled', () => {
        const state: DeepPartial<LoginSchema> = {
            password: '123',
        };

        expect(
            loginReducer(state as LoginSchema, loginByUsername.fulfilled)
                .isLoading
        ).toBe(false);
    });

    test('test extra reducers, status rejected', () => {
        const state: DeepPartial<LoginSchema> = {
            password: '123',
        };
        expect(
            loginReducer(state as LoginSchema, loginByUsername.rejected)
                .isLoading
        ).toBe(false);
        expect(
            loginReducer(state as LoginSchema, loginByUsername.rejected).error
        ).toEqual(undefined);
    });
});
