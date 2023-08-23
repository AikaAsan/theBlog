import { Country } from '@/entities/Country';
import { getProfileData } from './getProfileData';
import { StateSchema } from '@/app/providers/StoreProvider';
import { Currency } from '@/entities/Currency';

describe('getProfileData.test', () => {
    test('should return data', () => {
        const data = {
            first: 'Aika',
            lastname: 'Carriere',
            city: 'Bishkek',
            currency: Currency.CAD,
            country: Country.Canada,
        };
        const state: DeepPartial<StateSchema> = {
            profile: {
                data,
            },
        };
        expect(getProfileData(state as StateSchema)).toEqual(data);
    });
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileData(state as StateSchema)).toEqual(undefined);
    });
});
