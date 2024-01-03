import cn from 'classnames';
import { useCallback, useState } from 'react';
import { LangSwitcher } from '@/features/LangSwitcher';
import { ThemeSwitcher } from '@/features/ThemeSwitcher';
import { LocalStorage } from '@/shared/const';
import { Button, HStack, VStack } from '@/shared/ui';
import { Navbar } from '../Navbar/Navbar';
import LeftIcon from '@/shared/assets/icons/doubleLeft.svg';
import RightIcon from '@/shared/assets/icons/doubleRight.svg';
import s from './Sidebar.module.scss';

const initialIsCollapsedValue = JSON.parse(
    localStorage.getItem(LocalStorage.IS_SIDEBAR_COLLAPSED) || 'false',
);

interface SidebarProps {
    className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
    const [isCollapsed, setIsCollapsed] = useState<boolean>(initialIsCollapsedValue);
    const ToggleIcon = isCollapsed ? RightIcon : LeftIcon;

    const toggleSidebar = useCallback(() => {
        setIsCollapsed((prev) => {
            const currentValue = !prev;
            localStorage.setItem(LocalStorage.IS_SIDEBAR_COLLAPSED, JSON.stringify(currentValue));
            return currentValue;
        });
    }, []);

    return (
        <VStack
            className={cn(s.sidebar, className, { [s.collapsed]: isCollapsed })}
            dataTestId='sidebar'
        >
            <Navbar collapsed={isCollapsed} />
            <HStack align='center' justify='center' gap={8} className={s.switchers}>
                <ThemeSwitcher />
                <LangSwitcher />
            </HStack>
            <Button
                theme='clear'
                onClick={toggleSidebar}
                className={s.toggleBtn}
                data-testid='toggleBtn'
            >
                <ToggleIcon />
            </Button>
        </VStack>
    );
};
