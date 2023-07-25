import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { validateProfileData } from './validateProfileData';
import { ValidationProfileError } from '../../consts/editableProfileCardsConsts';

const data = {
    first: 'Aika',
    lastname: 'Carriere',
    city: 'Bishkek',
    currency: Currency.CAD,
    country: Country.Canada,
};

describe('validateProfileData.test', () => {
    test('success', async () => {
        const result = await validateProfileData(data);

        expect(result).toEqual([]);
    });
    test('without first and last name', async () => {
        const result = await validateProfileData({
            ...data,
            first: '',
            lastname: '',
        });

        expect(result).toEqual([ValidationProfileError.INCORRECT_USER_DATA]);
    });

    //     test('incorrect age', async () => {
    //         const result = await validateProfileData({
    //             ...data,
    //             age: undefined,
    //         });
    //
    //         expect(result).toEqual([ValidationProfileError.INCORRECT_AGE]);
    //     });

    test('incorrect country', async () => {
        const result = await validateProfileData({
            ...data,
            country: undefined,
        });

        expect(result).toEqual([ValidationProfileError.INCORRECT_COUNTRY]);
    });

    test('all data incorrect or undefined', async () => {
        const result = await validateProfileData({});

        expect(result).toEqual([
            ValidationProfileError.INCORRECT_USER_DATA,
            // ValidationProfileError.INCORRECT_AGE,
            ValidationProfileError.INCORRECT_COUNTRY,
        ]);
    });
});
