import { memo, SVGProps, VFC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Icon.module.scss';

interface IconProps {
    className?: string;
    svg: VFC<SVGProps<SVGSVGElement>>;
}

export const Icon = memo((props: IconProps) => {
    const { className, svg: Svg } = props;
    return (
        <Svg
            className={classNames(cls.Icon, {}, [className])}
        />
    );
});
