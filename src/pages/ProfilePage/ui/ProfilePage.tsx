import {
    fetchProfileData,
    getProfileError,
    getProfileForm,
    getProfileIsLoading,
    getProfileReadonly,
    getProfileValidationErrors,
    profileActions,
    ProfileCard,
    ValidateProfileError,
} from 'entities/Profile';
import { useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import {
    DynamicModuleLoader,
    ReducersList,
} from 'shared/components/DynamicModuleLoader/DynamicModuleLoader';
import { classNames } from 'shared/lib/classnames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { profileReducer } from 'entities/Profile';
import cls from './ProfilePage.module.scss';

import { useSelector } from 'react-redux';
import { ProfilePageHeader } from './ProfilePageHeader/ProfilePageHeader';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { TextTheme, Text } from 'shared/ui/Text/ui/Text';

const reducers: ReducersList = {
    profile: profileReducer,
};
interface ProfilePageProps {
    className?: string;
}

const ProfilePage = ({ className }: ProfilePageProps) => {
    const { t } = useTranslation('profile');
    const dispatch = useAppDispatch();
    const formData = useSelector(getProfileForm);
    const error = useSelector(getProfileError);
    const isLoading = useSelector(getProfileIsLoading);
    const readonly = useSelector(getProfileReadonly);
    const validationErrors = useSelector(getProfileValidationErrors);

    const validationErrorTranslations = {
        [ValidateProfileError.SERVER_ERROR]: t('Server error'),
        [ValidateProfileError.INCORRECT_COUNTRY]: t('Incorrect country'),
        [ValidateProfileError.NO_DATA]: t('No data'),
        [ValidateProfileError.INCORRECT_USER_DATA]: t(
            'Please provide Name and Lastname'
        ),
        [ValidateProfileError.INCORRECT_AGE]: t('Incorrect age'),
    };

    useEffect(() => {
        dispatch(fetchProfileData());
    }, [dispatch]);

    const onChangeFirstnameHandler = useCallback(
        (value?: string) => {
            dispatch(profileActions.updateProfile({ first: value || '' }));
        },
        [dispatch]
    );

    const onChangeLastnameHandler = useCallback(
        (value?: string) => {
            dispatch(profileActions.updateProfile({ lastname: value || '' }));
        },
        [dispatch]
    );

    const onChangeCityHandler = useCallback(
        (value?: string) => {
            dispatch(profileActions.updateProfile({ city: value || '' }));
        },
        [dispatch]
    );
    const onChangeUsernameHandler = useCallback(
        (value?: string) => {
            dispatch(profileActions.updateProfile({ username: value || '' }));
        },
        [dispatch]
    );

    const onChangeAvatarHandler = useCallback(
        (value?: string) => {
            dispatch(profileActions.updateProfile({ avatar: value || '' }));
        },
        [dispatch]
    );

    const onChangeCurrencyHandler = useCallback(
        (currency?: Currency) => {
            dispatch(profileActions.updateProfile({ currency }));
        },
        [dispatch]
    );

    const onChangeCountryHandler = useCallback(
        (country?: Country) => {
            dispatch(profileActions.updateProfile({ country }));
        },
        [dispatch]
    );

    return (
        <DynamicModuleLoader
            reducers={reducers}
            removeAfterUnmount
            name={`profile`}
        >
            <div className={classNames(cls.ProfilePage, {}, [className])}>
                <ProfilePageHeader />
                {validationErrors?.length &&
                    validationErrors.map((error) => (
                        <Text
                            key={error}
                            theme={TextTheme.ERROR}
                            text={validationErrorTranslations[error]}
                        />
                    ))}
                <ProfileCard
                    data={formData}
                    error={error}
                    isLoading={isLoading}
                    readonly={readonly}
                    onChangeFirstname={onChangeFirstnameHandler}
                    onChangeLastname={onChangeLastnameHandler}
                    onChangeCity={onChangeCityHandler}
                    onChangeUsername={onChangeUsernameHandler}
                    onChangeAvatar={onChangeAvatarHandler}
                    onChangeCurrency={onChangeCurrencyHandler}
                    onChangeCountry={onChangeCountryHandler}
                />
                {/* {t('Profile Page')} */}
            </div>
        </DynamicModuleLoader>
    );
};

export default ProfilePage;
