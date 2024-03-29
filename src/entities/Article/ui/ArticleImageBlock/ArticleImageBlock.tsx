import { AppImage, Skeleton, VStack } from '@/shared/ui';
import type { ArticleImageBlock as IArticleImageBlock } from '../../model/types/articleBlock';

interface ArticleTextBlockProps {
    block: IArticleImageBlock;
}

export const ArticleImageBlock = ({ block }: ArticleTextBlockProps) => (
    <VStack as='section' align='center' gap={8}>
        <AppImage
            src={block.src}
            fallback={<Skeleton height={200} />}
            alt={`Image for ${block.title}`}
        />
        {block.title && <p>{block.title}</p>}
    </VStack>
);
