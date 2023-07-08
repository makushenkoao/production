import { Flex, FlexProps } from '../Flex/Flex';

type HStackProps = Omit<FlexProps, 'direction'>;

/**
 * Deprecated, use new components from redesigned
 * @deprecated
 */
export const HStack = (props: HStackProps) => {
    return (
        <Flex
            direction="row"
            {...props}
        />
    );
};
