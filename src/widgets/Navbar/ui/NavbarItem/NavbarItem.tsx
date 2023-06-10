import { AppLink } from '@/shared/ui/AppLink';
import { memo } from 'react';
import { NavbarItemType } from '../../model/types/navbar';
import s from './NavbarItem.module.scss';
import cn from 'classnames';

interface NavbarItemProps extends NavbarItemType {
    collapsed: boolean;
}

const NavbarItemComponent = (props: NavbarItemProps) => {
    const { collapsed, path, title, Icon } = props;

    return (
        <AppLink
            to={path}
            size='size_h3'
            className={cn(s.link, { [s.collapsed]: collapsed })}
        >
            <Icon className={s.icon} />
            <p className={s.title}>{title}</p>
        </AppLink>
    );
};

export const NavbarItem = memo(NavbarItemComponent);
