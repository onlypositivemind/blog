import { HStack, Skeleton, VStack } from '@/shared/ui';

export const EditableProfileCardHeaderSkeleton = () => (
    <HStack justify='center'>
        <VStack align='center' gap={8}>
            <Skeleton width={100} height={100} borderRadius='circle' />
            <Skeleton width={100} height={20} />
        </VStack>
    </HStack>
);
