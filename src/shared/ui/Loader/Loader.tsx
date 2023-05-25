import { classNames } from 'shared/lib/classNames/classNames';
import './Loader.scss';

export const Loader = ({
    className,
}: {
        className?: string
}) => (
    <div className={classNames('lds-default', {}, [className])}>
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
    </div>
);
