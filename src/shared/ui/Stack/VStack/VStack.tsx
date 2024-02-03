import type { FlexProps } from '../Flex/Flex';
import { Flex } from '../Flex/Flex';

type VStackProps = Omit<FlexProps, 'direction'>;

export const VStack = (props: VStackProps) => <Flex direction='column' {...props} />;
