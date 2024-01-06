import { Skeleton, VStack } from '@/shared/ui';

export const ProfileCardSkeleton = () => (
    <VStack gap={16}>
        <Skeleton height={39} borderRadius='s' />
        <Skeleton height={39} borderRadius='s' />
        <Skeleton height={39} borderRadius='s' />
        <Skeleton height={39} borderRadius='s' />
        <Skeleton height={39} borderRadius='s' />
        <Skeleton height={39} borderRadius='s' />
        <Skeleton height={39} width={250} borderRadius='s' />
        <Skeleton height={39} width={200} borderRadius='s' />
    </VStack>
);
