import cn from 'classnames';
import { useState } from 'react';
import { LangSwitcher } from '@/features/LangSwitcher';
import { ThemeSwitcher } from '@/features/ThemeSwitcher';
import { Button } from '@/shared/ui';
import { Navbar } from '../Navbar/Navbar';
import s from './Sidebar.module.scss';

interface SidebarProps {
    className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <aside
            className={cn(s.sidebar, className, { [s.collapsed]: collapsed })}
            data-testid='sidebar'
        >
            <Navbar collapsed={collapsed} />
            <div className={s.switchers}>
                <ThemeSwitcher className={s.switcher} />
                <LangSwitcher className={s.switcher} />
            </div>
            <Button
                theme='clear'
                onClick={() => setCollapsed((prev) => !prev)}
                className={s.toggleBtn}
                data-testid='toggleBtn'
            >
                <span>{collapsed ? '»' : '«'}</span>
            </Button>
        </aside>
    );
};
