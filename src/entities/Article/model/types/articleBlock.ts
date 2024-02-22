interface ArticleBaseBlock {
    id: string;
    type: 'CODE' | 'IMAGE' | 'TEXT';
}

interface ArticleCodeBlock extends ArticleBaseBlock {
    type: 'CODE';
    code: string;
}

interface ArticleImageBlock extends ArticleBaseBlock {
    type: 'IMAGE';
    src: string;
    title?: string;
}

interface ArticleTextBlock extends ArticleBaseBlock {
    type: 'TEXT';
    paragraphs: string[];
    title?: string;
}

type ArticleBlock = ArticleCodeBlock | ArticleImageBlock | ArticleTextBlock;

export type {
    ArticleBaseBlock,
    ArticleCodeBlock,
    ArticleImageBlock,
    ArticleTextBlock,
    ArticleBlock,
};
