import { createReduxStore, AppDispatch } from './config/store';
import { StoreProvider } from './ui/StoreProvider';
import type {
    StateSchema,
    ThunkConfig,
    ReduxStoreWithManager,
} from './config/StateSchema';

export { StoreProvider, createReduxStore, ReduxStoreWithManager };

export type { StateSchema, AppDispatch, ThunkConfig };
 