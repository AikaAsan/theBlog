import {
    fetchProfileData,
    getProfileData,
    getProfileError,
    getProfileIsLoading,
    ProfileCard,
} from 'entities/Profile';
import { useEffect } from 'react';
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

const reducers: ReducersList = {
    profile: profileReducer,
};
interface ProfilePageProps {
    className?: string;
}

const ProfilePage = ({ className }: ProfilePageProps) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const data = useSelector(getProfileData);
    const error = useSelector(getProfileError);
    const isLoading = useSelector(getProfileIsLoading);

    useEffect(() => {
        dispatch(fetchProfileData());
    }, [dispatch]);

    return (
        <DynamicModuleLoader
            reducers={reducers}
            removeAfterUnmount
            // eslint-disable-next-line i18next/no-literal-string
            name={'profile'}
        >
            <div className={classNames(cls.ProfilePage, {}, [className])}>
                <ProfileCard data={data} error={error} isLoading={isLoading} />
            </div> 
        </DynamicModuleLoader>
    );
};

export default ProfilePage;
