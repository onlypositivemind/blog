import cn from 'classnames';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { NavbarItemType } from '@/widgets/Sidebar/model/types/navbar';
import { AppLink } from '@/shared/ui';
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
            className={cn(s.link, { [s.collapsed]: collapsed })}
            theme='white'
            size='size_p2'
        >
            <Icon className={s.icon} />
            <p className={s.title}>{t(title)}</p>
        </AppLink>
    );
};

export const NavbarItem = memo(NavbarItemComponent);