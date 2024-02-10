import { Skeleton, VStack } from '@/shared/ui';

export const ArticleSkeleton = () => (
    <VStack gap={16}>
        <Skeleton height={150} />
    </VStack>
);
