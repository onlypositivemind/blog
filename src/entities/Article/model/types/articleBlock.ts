interface ArticleBaseBlock {
    id: string;
    type: 'code' | 'image' | 'text';
}

interface ArticleCodeBlock extends ArticleBaseBlock {
    type: 'code';
    code: string;
}

interface ArticleImageBlock extends ArticleBaseBlock {
    type: 'image';
    src: string;
    title?: string;
}

interface ArticleTextBlock extends ArticleBaseBlock {
    type: 'text';
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
