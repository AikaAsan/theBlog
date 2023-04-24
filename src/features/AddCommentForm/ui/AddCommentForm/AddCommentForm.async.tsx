import { FC, lazy } from 'react';
import { AddCommentFormProps } from './AddCommentForm';

export const AddCommentFormFormAsync = lazy<FC<AddCommentFormProps>>(
    () =>
        new Promise((resolve) => {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            //for testing purpose only
            setTimeout(() => resolve(import('./AddCommentForm')), 1500);
        })
);
