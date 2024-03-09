import type { ArticleTextBlock as IArticleTextBlock } from '../../model/types/articleBlock';
import s from './ArticleTextBlock.module.scss';

interface ArticleTextBlockProps {
    block: IArticleTextBlock;
}

export const ArticleTextBlock = ({ block }: ArticleTextBlockProps) => (
    <section>
        {block.title && <h3 className={s.title}>{block.title}</h3>}
        {block.paragraphs.map((par, i) => (
            <p key={i} className={s.paragraph}>
                {par}
            </p>
        ))}
    </section>
);
