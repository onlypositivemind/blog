import cn from 'classnames';
import { useState } from 'react';
import { LangSwitcher } from '@/features/LangSwitcher';
import { ThemeSwitcher } from '@/features/ThemeSwitcher';
import { Button, HStack, VStack } from '@/shared/ui';
import { Navbar } from '../Navbar/Navbar';
import LeftIcon from '@/shared/assets/icons/doubleLeft.svg';
import RightIcon from '@/shared/assets/icons/doubleRight.svg';
import s from './Sidebar.module.scss';

interface SidebarProps {
    className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);
    const ToggleIcon = collapsed ? RightIcon : LeftIcon;

    return (
        <VStack
            as='aside'
            className={cn(s.sidebar, className, { [s.collapsed]: collapsed })}
            dataTestId='sidebar'
        >
            <Navbar collapsed={collapsed} />
            <HStack align='center' justify='center' gap={8} className={s.switchers}>
                <ThemeSwitcher />
                <LangSwitcher />
            </HStack>
            <Button
                theme='clear'
                onClick={() => setCollapsed((prev) => !prev)}
                className={s.toggleBtn}
                data-testid='toggleBtn'
            >
                <ToggleIcon />
            </Button>
        </VStack>
    );
};
