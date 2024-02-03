import { Code } from '@/shared/ui';
import type { ArticleCodeBlock as IArticleCodeBlock } from '../../model/types/articleBlock';

interface ArticleCodeBlockProps {
    block: IArticleCodeBlock;
}

export const ArticleCodeBlock = ({ block }: ArticleCodeBlockProps) => <Code code={block.code} />;
