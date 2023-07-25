import { User } from 'entities/User';
import { ArticleBlockType, ArticleType } from '../consts/articleConsts';
export interface ArtcileBlockBase {
    id: string;
    type: ArticleBlockType;
}
export interface ArticleCodeBlock extends ArtcileBlockBase {
    type: ArticleBlockType.CODE;
    code: string;
}
export interface ArticleImageBlock extends ArtcileBlockBase {
    type: ArticleBlockType.IMAGE;
    src: string;
    title: string;
}
export interface ArticleTextBlock extends ArtcileBlockBase {
    type: ArticleBlockType.TEXT;
    title?: string;
    paragraphs: string[];
}
export type ArticleBlock =
    | ArticleCodeBlock
    | ArticleImageBlock
    | ArticleTextBlock;

export interface Article {
    id: string; // | undefined;
    title: string;
    user: User;
    subtitle: string;
    img: string;
    views: number;
    createdAt: string;
    type: ArticleType[];
    blocks: ArticleBlock[];
}
