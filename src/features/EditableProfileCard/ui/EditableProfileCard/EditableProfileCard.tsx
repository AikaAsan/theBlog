import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { VStack } from '@/shared/ui/Stack';
import {
    DynamicModuleLoader,
    ReducersList,
} from '@/shared/components/DynamicModuleLoader/DynamicModuleLoader';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import { useSelector } from 'react-redux';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';

import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { classNames } from '@/shared/lib/classnames/classNames';
import { EditableProfileCardHeader } from '../EditableProfileCardHeader/EditableProfileCardHeader';
import { TextTheme } from '@/shared/ui/Text/ui/Text';
import { Text } from '@/shared/ui/Text/ui/Text';
import { ValidationProfileError } from '../../model/consts/editableProfileCardsConsts';
import { ProfileCard } from '@/entities/Profile';
import { getProfileError } from '../../model/selectors/getProfileError/getProfileError';
import { getProfileForm } from '../../model/selectors/getProfileForm/getProfileForm';
import { getProfileIsLoading } from '../../model/selectors/getProfileIsLoading/getProfileIsLoading';
import { getProfileReadonly } from '../../model/selectors/getProfileReadonly/getProfileReadonly';
import { getProfileValidationErrors } from '../../model/selectors/getProfileValidationErrors/getProfileValidationErrors';
import { fetchProfileData } from '../../model/services/fetchProfileData/fetchProfileData';
import { profileReducer, profileActions } from '../../model/slice/profileSlice';

interface EditableProfileCardProps {
    className?: string;
    id?: string;
}
const reducers: ReducersList = {
    profile: profileReducer,
};

export const EditableProfileCard = memo((props: EditableProfileCardProps) => {
    const { className, id } = props;
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const formData = useSelector(getProfileForm);
    const error = useSelector(getProfileError);
    const isLoading = useSelector(getProfileIsLoading);
    const readonly = useSelector(getProfileReadonly);

    const validationErrors = useSelector(getProfileValidationErrors);

    const validationErrorTranslations = {
        [ValidationProfileError.SERVER_ERROR]: t('Server error'),
        [ValidationProfileError.INCORRECT_COUNTRY]: t('Incorrect country'),
        [ValidationProfileError.NO_DATA]: t('No data'),
        [ValidationProfileError.INCORRECT_USER_DATA]: t(
            'Please provide Name and Lastname'
        ),
        [ValidationProfileError.INCORRECT_AGE]: t('Incorrect age'),
    };

    useInitialEffect(() => {
        if (id) {
            dispatch(fetchProfileData(id));
        }
    });

    const onChangeFirstnameHandler = useCallback(
        (value?: string) => {
            console.log('firstName dispatched');
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
        <DynamicModuleLoader reducers={reducers} name={`profile`}>
            <VStack gap='8' max className={classNames('', {}, [className])}>
                <EditableProfileCardHeader />
                {validationErrors?.length &&
                    validationErrors.map((err) => (
                        <Text
                            key={err}
                            theme={TextTheme.ERROR}
                            text={validationErrorTranslations[err]}
                            data-testid={`EditableProfileCard.Error`}
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
            </VStack>
        </DynamicModuleLoader>
    );
});
