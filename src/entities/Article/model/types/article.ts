import { User } from "entities/User";

export enum ArticleBlockType {
    CODE = 'CODE',
    IMAGE = 'IMAGE',
    TEXT = 'TEXT',
}
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

export enum ArticleType {
    IT = 'IT',
    SCIENCE = 'SCIENCE',
    ECONOMICS = 'ECONOMICS',
}

export enum ArticleView {
    LIST = 'LIST',
    GRID = 'GRID',
}
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
