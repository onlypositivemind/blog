export interface ArticleBaseBlock {
    id: string;
    type: 'CODE' | 'IMAGE' | 'TEXT';
}

export interface ArticleCodeBlock extends ArticleBaseBlock {
    type: 'CODE';
    code: string;
}

export interface ArticleImageBlock extends ArticleBaseBlock {
    type: 'IMAGE';
    title: string;
    src: string;
}

export interface ArticleTextBlock extends ArticleBaseBlock {
    type: 'TEXT';
    paragraphs: string[];
    title?: string;
}

export type ArticleBlock = ArticleCodeBlock | ArticleImageBlock | ArticleTextBlock;
