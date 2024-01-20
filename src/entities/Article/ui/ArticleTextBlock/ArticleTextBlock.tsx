import { ArticleTextBlock as ArticleTextBlockType } from '../../model/types/articleBlock';

interface ArticleTextBlockProps {
    block: ArticleTextBlockType;
}

export const ArticleTextBlock = ({ block }: ArticleTextBlockProps) => (
    <div className='mb-4'>
        {block.title && <h3 className='mb-2'>{block.title}</h3>}
        {block.paragraphs.map((par, i) => (
            <p key={i} className='mb-1'>
                {par}
            </p>
        ))}
    </div>
);
