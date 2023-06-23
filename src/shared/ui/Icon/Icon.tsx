import { memo, SVGProps, VFC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Icon.module.scss';

interface IconProps {
    className?: string;
    svg: VFC<SVGProps<SVGSVGElement>>;
    inverted?: boolean;
}

export const Icon = memo((props: IconProps) => {
    const { className, svg: Svg, inverted } = props;
    return (
        <Svg
            className={classNames(cls.Icon, {
                [cls.inverted]: inverted,
            }, [className])}
        />
    );
});
