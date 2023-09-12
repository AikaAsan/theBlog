
export { ArticleViewSelector } from './ui/ArticleViewSelector/ArticleViewSelector';

export { ArticleList } from './ui/ArticleList/ArticleList';
export { getArticleDetailsData } from './model/selectors/articleDetails';
export { ArticleDetails } from './ui/ArticleDetails/ArticleDetails';
export { ArticleSortSelector } from './ui/ArticleSortSelector/ArticleSortSelector';
export { ArticleTypeTabs } from './ui/ArticleTypeTabs/ArticleTypeTabs';
export {
    ArticleView,
    ArticleSortField,
    ArticleType,
    ArticleBlockType,
} from './model/consts/articleConsts';

export type { ArticleDetailsSchema } from './model/types/articleDetailsSchema';
export type { Article } from './model/types/article';

export { articleDetailsReducer } from './model/slice/articleDetailsSlice'