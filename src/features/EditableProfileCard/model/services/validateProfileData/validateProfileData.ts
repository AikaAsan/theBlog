import { Profile } from 'entities/Profile';
import { ValidationProfileError } from '../../consts/editableProfileCardsConsts';

export const validateProfileData = (profile?: Profile) => {
    const errors: ValidationProfileError[] = [];

    if (!profile) {
        return [ValidationProfileError.NO_DATA];
    }

    const { first, lastname, age, country } = profile;

    if (!first || !lastname) {
        errors.push(ValidationProfileError.INCORRECT_USER_DATA);
    }

    // if (!age || !Number.isInteger(age) ) {
    //     errors.push(ValidateProfileError.INCORRECT_AGE);
    // }

    if (!country) {
        errors.push(ValidationProfileError.INCORRECT_COUNTRY);
    }

    return errors;
};
