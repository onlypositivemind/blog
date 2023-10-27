import cn from 'classnames';
import { useState } from 'react';
import { LangSwitcher } from '@/features/LangSwitcher';
import { ThemeSwitcher } from '@/features/ThemeSwitcher';
import { Button, HStack, VStack } from '@/shared/ui';
import { Navbar } from '../Navbar/Navbar';
import s from './Sidebar.module.scss';

interface SidebarProps {
    className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <VStack
            as='aside'
            className={cn(s.sidebar, className, { [s.collapsed]: collapsed })}
            data-testid='sidebar'
        >
            <Navbar collapsed={collapsed} />
            <HStack align='center' justify='center' gap={4} className={s.switchers}>
                <ThemeSwitcher className={s.switcher} />
                <LangSwitcher className={s.switcher} />
            </HStack>
            <Button
                theme='clear'
                onClick={() => setCollapsed((prev) => !prev)}
                className={s.toggleBtn}
                data-testid='toggleBtn'
            >
                <span>{collapsed ? '»' : '«'}</span>
            </Button>
        </VStack>
    );
};
