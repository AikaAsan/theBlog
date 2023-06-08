import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classnames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/ui/Button';
import { Text } from 'shared/ui/Text/ui/Text';
import { useSelector } from 'react-redux';
import {
    getProfileData,
    getProfileReadonly,
    profileActions,
    updateProfileData,
} from 'entities/Profile';
import { useCallback } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getUserAuthData } from 'entities/User';
import { HStack } from 'shared/ui/Stack/HStack/HStack';

interface ProfilePageHeaderProps {
    className?: string;
}

export const ProfilePageHeader = ({ className }: ProfilePageHeaderProps) => {
    const { t } = useTranslation('profile');

    const authData = useSelector(getUserAuthData);

    const profileData = useSelector(getProfileData);

    const canEdit = authData?.id === profileData?.id;

    const readonly = useSelector(getProfileReadonly);
    const dispatch = useAppDispatch();

    const onEditHandler = useCallback(() => {
        dispatch(profileActions.setReadonly(false));
    }, [dispatch]);

    const onCancelEditHandler = useCallback(() => {
        dispatch(profileActions.cancelEdit());
    }, [dispatch]);

    const onSaveHandler = useCallback(() => {
        dispatch(updateProfileData());
    }, [dispatch]);

    return (
        <HStack max justify='between' className={classNames('', {}, [className])}>
            <Text title={t('Profile')} />
            {canEdit && (
                <>
                    {readonly ? (
                        <Button
                            theme={ButtonTheme.OUTLINE}
                            onClick={onEditHandler}
                        >
                            {t('Edit')}
                        </Button>
                    ) : (
                        <HStack gap='8'>
                            <Button
                                theme={ButtonTheme.OUTLINE_RED}
                                onClick={onCancelEditHandler}
                            >
                                {t('Cancel')}
                            </Button>
                            <Button
                                theme={ButtonTheme.OUTLINE}
                                onClick={onSaveHandler}
                            >
                                {t('Save')}
                            </Button>
                        </HStack>
                    )}
                </>
            )}
        </HStack>
    );
};
