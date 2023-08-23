import { getUserInitialized } from '../getUserInitialized/getUserInitialized';
import { StateSchema } from '@/app/providers/StoreProvider';

describe('getUserAuthData.test', () => {
    test('should return user initilized true', () => {
        const state: DeepPartial<StateSchema> = {
            user: {
                _initialized: true,
            },
        };
        expect(getUserInitialized(state as StateSchema)).toEqual(true);
    });
    test('should return user initilized false', () => {
        const state: DeepPartial<StateSchema> = {
            user: {
                _initialized: false,
            },
        };
        expect(getUserInitialized(state as StateSchema)).toEqual(false);
    });
});
