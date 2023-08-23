import { getUserAuthData } from '../getUserAuthData/getUserAuthData';
import { StateSchema } from '@/app/providers/StoreProvider';

describe('getUserAuthData.test', () => {
    test('should return user AuthData', () => {
        const state: DeepPartial<StateSchema> = {
            user: {
                authData: {
                    id: '1',
                    username: 'admin',
                },
            },
        };
        expect(getUserAuthData(state as StateSchema)).toEqual({
            id: '1',
            username: 'admin',
        });
    });
});
