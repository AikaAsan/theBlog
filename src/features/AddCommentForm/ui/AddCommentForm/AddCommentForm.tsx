/* eslint-disable i18next/no-literal-string */
import {
    getAddCommentFormError,
    getAddCommentFormText,
} from '../../model/selectors/addCommentFormSelectors';
import { FC, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classnames/classNames';
import { Button } from 'shared/ui/Button/ui/Button';
import { Input } from 'shared/ui/Input/Input';
import cls from './AddCommentForm.module.scss';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import {
    addCommentFormActions,
    addCommentFormReducer,
} from '../../model/slices/addCommentFormSlice';
import {
    DynamicModuleLoader,
    ReducersList,
} from 'shared/components/DynamicModuleLoader/DynamicModuleLoader';
import { HStack } from 'shared/ui/Stack';

const reducers: ReducersList = {
    addCommentForm: addCommentFormReducer,
};
export interface AddCommentFormProps {
    className?: string;
    onSendComment: (text: string) => void;
}

const AddCommentForm: FC<AddCommentFormProps> = memo(
    (props: AddCommentFormProps) => {
        const { className, onSendComment } = props;
        const { t } = useTranslation();
        const text = useSelector(getAddCommentFormText);
        const error = useSelector(getAddCommentFormError);
        const dispatch = useAppDispatch();

        const onCommentTextChangeHandler = useCallback(
            (value: string) => {
                dispatch(addCommentFormActions.setText(value));
            },
            [dispatch]
        );
        const onSubmitHandler = useCallback(() => {
            onSendComment(text || '');
            onCommentTextChangeHandler('');
        }, [onCommentTextChangeHandler, onSendComment, text]);

        return (
            <DynamicModuleLoader name={`addCommentForm`} reducers={reducers}>
                <HStack
                    max
                    justify='between'
                    className={classNames(cls.addCommentForm, {}, [className])}
                >
                    <Input
                        placeholder={t('add comment')}
                        value={text}
                        onChange={onCommentTextChangeHandler}
                        className={cls.input}
                    />
                    <Button onClick={onSubmitHandler}>{t('Submit')}</Button>
                </HStack>
            </DynamicModuleLoader>
        );
    }
);

export default AddCommentForm;
