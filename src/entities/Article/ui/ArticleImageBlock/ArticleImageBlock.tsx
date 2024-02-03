import { AppImage, Skeleton, VStack } from '@/shared/ui';
import { ArticleImageBlock as IArticleImageBlock } from '../../model/types/articleBlock';

interface ArticleTextBlockProps {
    block: IArticleImageBlock;
}

export const ArticleImageBlock = ({ block }: ArticleTextBlockProps) => (
    <VStack align='center' gap={8}>
        <AppImage src={block.src} fallback={<Skeleton height={200} />} />
        {block.title && <p>{block.title}</p>}
    </VStack>
);
