import { Flex, FlexProps } from '../Flex/Flex';

type VStackProps = Omit<FlexProps, 'direction'>;

/**
 * Deprecated, use new components from redesigned
 * @deprecated
 */
export const VStack = (props: VStackProps) => {
    return (
        <Flex
            direction="column"
            {...props}
        />
    );
};
