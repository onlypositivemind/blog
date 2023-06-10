import cn from 'classnames';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { AppLink } from '@/shared/ui/AppLink';
import { NavbarItemType } from '../../model/types/navbar';
import s from './NavbarItem.module.scss';

interface NavbarItemProps extends NavbarItemType {
    collapsed: boolean;
}

const NavbarItemComponent = (props: NavbarItemProps) => {
    const { collapsed, path, title, Icon } = props;
    const { t } = useTranslation();

    return (
        <AppLink
            to={path}
            size='size_h3'
            className={cn(s.link, { [s.collapsed]: collapsed })}
        >
            <Icon className={s.icon} />
            <p className={s.title}>{t(title)}</p>
        </AppLink>
    );
};

export const NavbarItem = memo(NavbarItemComponent);
