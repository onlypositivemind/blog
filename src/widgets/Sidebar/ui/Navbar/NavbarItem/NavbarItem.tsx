import cn from 'classnames';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { selectUserAuthData } from '@/entities/User';
import { NavbarItemType } from '@/widgets/Sidebar/model/types/navbar';
import { AppLink } from '@/shared/ui';
import s from './NavbarItem.module.scss';

interface NavbarItemProps extends NavbarItemType {
    collapsed: boolean;
}

export const NavbarItem = ({ collapsed, path, title, Icon, authOnly }: NavbarItemProps) => {
    const { t } = useTranslation();
    const userData = useSelector(selectUserAuthData);

    if (authOnly && !userData) {
        return null;
    }

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
