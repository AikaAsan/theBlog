import { getUserAuthData } from '@/entities/User';
import { getProfileData } from '../../model/selectors/getProfileData/getProfileData';
import { FC, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classnames/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Button, ButtonTheme } from '@/shared/ui/Button/ui/Button';
import { HStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text/ui/Text';
import { getProfileReadonly } from '../../model/selectors/getProfileReadonly/getProfileReadonly';
import { updateProfileData } from '../../model/services/updateProfileData/updateProfileData';
import { profileActions } from '../../model/slice/profileSlice';
interface EditableProfileCardHeaderProps {
    className?: string;
}

export const EditableProfileCardHeader: FC<EditableProfileCardHeaderProps> =
    memo((props: EditableProfileCardHeaderProps) => {
        const { className } = props;

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
            <HStack
                max
                justify='between'
                className={classNames('', {}, [className])}
            >
                <Text title={t('Profile')} />
                {canEdit && (
                    <>
                        {readonly ? (
                            <Button
                                theme={ButtonTheme.OUTLINE}
                                onClick={onEditHandler}
                                data-testid={`EditableProfileCardHeader.EditButton`}
                            >
                                {t('Edit')}
                            </Button>
                        ) : (
                            <HStack gap='8'>
                                <Button
                                    theme={ButtonTheme.OUTLINE_RED}
                                    onClick={onCancelEditHandler}
                                    data-testid={`EditableProfileCardHeader.CancelButton`}
                                >
                                    {t('Cancel')}
                                </Button>
                                <Button
                                    theme={ButtonTheme.OUTLINE}
                                    onClick={onSaveHandler}
                                    data-testid={`EditableProfileCardHeader.SaveButton`}
                                >
                                    {t('Save')}
                                </Button>
                            </HStack>
                        )}
                    </>
                )}
            </HStack>
        );
    });
