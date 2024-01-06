import cn from 'classnames';
import { useTranslation } from 'react-i18next';
import { NavbarItemType } from '@/widgets/Sidebar/model/types/navbar';
import { AppIcon, AppLink } from '@/shared/ui';
import s from './NavbarItem.module.scss';

interface NavbarItemProps extends NavbarItemType {
    collapsed: boolean;
}

export const NavbarItem = ({ collapsed, path, title, Icon }: NavbarItemProps) => {
    const { t } = useTranslation();

    return (
        <AppLink
            to={path}
            className={cn(s.link, { [s.collapsed]: collapsed })}
            theme='white'
            size='m'
        >
            <AppIcon Icon={Icon} size='xl' color='white' className={s.icon} />
            <p className={s.title}>{t(title)}</p>
        </AppLink>
    );
};
