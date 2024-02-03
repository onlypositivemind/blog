import type { ArticleTextBlock as IArticleTextBlock } from '../../model/types/articleBlock';
import s from './ArticleTextBlock.module.scss';

interface ArticleTextBlockProps {
    block: IArticleTextBlock;
}

export const ArticleTextBlock = ({ block }: ArticleTextBlockProps) => (
    <div>
        {block.title && <h3 className={s.title}>{block.title}</h3>}
        {block.paragraphs.map((par, i) => (
            <p key={i} className={s.paragraph}>
                {par}
            </p>
        ))}
    </div>
);
