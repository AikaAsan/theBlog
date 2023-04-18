import { EntityState } from '@reduxjs/toolkit';
import { Comment } from 'entities/Comment';

//EntityState has two fields : ids and entities. ArticleDetailsSchema inheriting those two fields 
// export interface EntityState<T> {
//     ids: EntityId[];
//     entities: Dictionary<T>;
// }
export interface ArticleDetailsCommentsSchema extends EntityState<Comment>{
    isLoading?: boolean;
    error?: string;
}
