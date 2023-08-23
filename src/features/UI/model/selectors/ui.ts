import { createSelector } from '@reduxjs/toolkit';

import { StateSchema } from '@/app/providers/StoreProvider';

export const getUIScrollPosition = (state: StateSchema) => state.ui.scroll;


export const getUIScrollPositionByPath = createSelector(
    getUIScrollPosition,
    (state: StateSchema, path: string) => path,
    (scroll, path) => scroll[path] || 0,
);