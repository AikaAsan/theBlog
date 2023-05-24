/* eslint-disable @typescript-eslint/ban-ts-comment */
import { lazy } from 'react';

export const ArticleEditPageAsync = lazy(
    () =>
        new Promise((resolve) => {
            // @ts-ignore
            setTimeout(() => resolve(import('./ArticleEditPage')), 400);
        })
);