import { Skeleton, VStack } from '@/shared/ui';

export const ArticleSkeleton = () => (
    <VStack gap={16}>
        <Skeleton height={150} />
        <Skeleton height={150} />
        <Skeleton height={150} />
        <Skeleton height={150} />
        <Skeleton height={39} />
        <Skeleton height={39} />
    </VStack>
);
