import { HStack, Skeleton, VStack } from '@/shared/ui';

export const ArticleSkeleton = () => (
    <>
        <HStack align='center' justify='center' gap={16} className='mb-6'>
            <Skeleton borderRadius='circle' width={160} height={160} />
            <VStack>
                <Skeleton width={200} height={36} borderRadius='xs' className='mb-4' />
                <VStack gap={4}>
                    <Skeleton width={180} height={24} borderRadius='xs' />
                    <Skeleton width={100} height={24} borderRadius='xs' />
                </VStack>
            </VStack>
        </HStack>
        <VStack gap={32}>
            <Skeleton height={280} borderRadius='s' />
            <Skeleton height={240} borderRadius='s' />
            <Skeleton height={220} borderRadius='s' />
        </VStack>
    </>
);
