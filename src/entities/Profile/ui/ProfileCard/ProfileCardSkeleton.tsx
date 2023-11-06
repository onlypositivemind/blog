import { Skeleton, VStack } from '@/shared/ui';

export const ProfileCardSkeleton = () => (
    <VStack gap={16}>
        <Skeleton border={8} height={39} />
        <Skeleton border={8} height={39} />
        <Skeleton border={8} height={39} />
        <Skeleton border={8} height={39} />
        <Skeleton border={8} height={39} />
        <Skeleton border={8} height={39} />
        <Skeleton border={8} height={39} width={250} />
        <Skeleton border={8} height={39} width={200} />
    </VStack>
);
