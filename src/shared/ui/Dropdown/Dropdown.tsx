import { Menu } from '@headlessui/react';
import { Fragment, memo, ReactNode } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { DropdownDirection } from 'shared/types/ui';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import cls from './Dropdown.module.scss';

export interface DropdownItem {
    value?: string;
    content?: ReactNode;
    onClick?: () => void;
    href?: string;
    disabled?: boolean;
}

interface DropdownProps {
    className?: string;
    items: DropdownItem[]
    trigger: ReactNode;
    direction?: DropdownDirection;
}

const mapDirectionClass: Record<DropdownDirection, string> = {
    'bottom left': cls.optionsBottomLeft,
    'bottom right': cls.optionsBottomRight,
    'top left': cls.optionsTopLeft,
    'top right': cls.optionsTopRight,
};

export const Dropdown = memo((props: DropdownProps) => {
    const {
        className, items, trigger, direction = 'bottom right',
    } = props;

    const menuClasses = [mapDirectionClass[direction]];

    return (
        <Menu
            as="div"
            className={classNames(cls.Dropdown, {}, [className])}
        >
            <Menu.Button className={cls.btn}>
                {trigger}
            </Menu.Button>
            <Menu.Items
                className={classNames(cls.menu, {}, menuClasses)}
            >
                {items.map((item, index) => {
                    const content = ({ active }: {
                        active: boolean;
                    }) => (
                        <button
                            type="button"
                            onClick={item.onClick}
                            disabled={item.disabled}
                            className={classNames(cls.item, { [cls.active]: active })}
                        >
                            {item.content}
                        </button>
                    );

                    if (item.href) {
                        return (
                            <Menu.Item
                                as={AppLink}
                                to={item.href}
                                key={index}
                                disabled={item.disabled}
                            >
                                {content}
                            </Menu.Item>
                        );
                    }

                    return (
                        <Menu.Item
                            as={Fragment}
                            key={index}
                            disabled={item.disabled}
                        >
                            {content}
                        </Menu.Item>
                    );
                })}
            </Menu.Items>
        </Menu>
    );
});
