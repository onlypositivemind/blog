import cn from 'classnames';
import { useLocation } from 'react-router-dom';
import { NavbarItemType } from '@/widgets/Sidebar/model/types/navbar';
import { getRouteAbout, getRouteMain, getRouteProfile } from '@/shared/const/router';
import { NavbarItem } from './NavbarItem/NavbarItem';
import AboutPageIcon from '@/shared/assets/icons/about-page.svg';
import MainPageIcon from '@/shared/assets/icons/main-page.svg';
import ProfilePageIcon from '@/shared/assets/icons/profile-page.svg';
import s from './Navbar.module.scss';

interface NavbarProps {
    collapsed: boolean;
    className?: string;
}

const navbarItemsList: NavbarItemType[] = [
    { path: getRouteMain(), title: 'Home', Icon: MainPageIcon },
    { path: getRouteAbout(), title: 'About', Icon: AboutPageIcon },
    { path: getRouteProfile(), title: 'Profile', Icon: ProfilePageIcon },
];

export const Navbar = ({ className, collapsed }: NavbarProps) => {
    const { pathname } = useLocation();

    return (
        <nav className={cn(s.navbar, className, { [s.collapsed]: collapsed })}>
            <ul className={s.list}>
                {navbarItemsList.map((item) => (
                    <li
                        key={item.path}
                        className={cn(s.navItem, { [s.active]: item.path === pathname })}
                    >
                        <NavbarItem
                            collapsed={collapsed}
                            path={item.path}
                            title={item.title}
                            Icon={item.Icon}
                        />
                    </li>
                ))}
            </ul>
        </nav>
    );
};
