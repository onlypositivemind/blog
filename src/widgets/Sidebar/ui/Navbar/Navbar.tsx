import cn from 'classnames';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { selectNavbarItems } from '@/widgets/Sidebar/model/selectors';
import { NavbarItem } from './NavbarItem/NavbarItem';
import s from './Navbar.module.scss';

interface NavbarProps {
    collapsed: boolean;
    className?: string;
}

export const Navbar = ({ className, collapsed }: NavbarProps) => {
    const { pathname } = useLocation();
    const navbarItems = useSelector(selectNavbarItems);

    return (
        <nav className={cn(s.navbar, className, { [s.collapsed]: collapsed })}>
            <ul>
                {navbarItems.map((item) => (
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
