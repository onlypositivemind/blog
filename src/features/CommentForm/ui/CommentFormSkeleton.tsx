import { useLanguage } from '@/shared/lib/hooks';
import { Skeleton, VStack } from '@/shared/ui';

export const CommentFormSkeleton = () => {
    const { activeLanguage } = useLanguage();

    return (
        <VStack gap={12}>
            <Skeleton height={80} borderRadius='xs' />
            <Skeleton width={activeLanguage === 'ru' ? 112 : 74} height={35} borderRadius='s' />
        </VStack>
    );
};
