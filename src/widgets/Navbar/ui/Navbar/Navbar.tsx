import cn from 'classnames';
import { memo } from 'react';
import { getRouteAbout, getRouteMain } from '@/shared/const/router';
import { NavbarItemType } from '../../model/types/navbar';
import { NavbarItem } from '../NavbarItem/NavbarItem';
import AboutPageIcon from '@/shared/assets/icons/about-page.svg';
import MainPageIcon from '@/shared/assets/icons/main-page.svg';
import s from './Navbar.module.scss';

interface NavbarProps {
    collapsed: boolean;
    className?: string;
}

const navbarItemsList: NavbarItemType[] = [
    { path: getRouteMain(), title: 'Home', Icon: MainPageIcon },
    { path: getRouteAbout(), title: 'About', Icon: AboutPageIcon },
];

const NavbarComponent = (props: NavbarProps) => {
    const { className, collapsed } = props;

    return (
        <nav className={cn(s.navbar, className, { [s.collapsed]: collapsed })}>
            <ul className={s.list}>
                {navbarItemsList.map((item) => (
                    <li key={item.path}>
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

export const Navbar = memo(NavbarComponent);
