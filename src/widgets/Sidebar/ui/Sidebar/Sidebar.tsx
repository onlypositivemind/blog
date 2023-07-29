import cn from 'classnames';
import { memo, useMemo, useState } from 'react';
import { LangSwitcher } from '@/features/LangSwitcher';
import { ThemeSwitcher } from '@/features/ThemeSwitcher';
import { Button } from '@/shared/ui';
import { Navbar } from '../Navbar/Navbar';
import s from './Sidebar.module.scss';

interface SidebarProps {
    className?: string;
}

const SidebarComponent = (props: SidebarProps) => {
    const { className } = props;
    const [collapsed, setCollapsed] = useState(false);

    const toggleButton = useMemo(
        () => (
            <Button
                theme='clear'
                onClick={() => setCollapsed((prev) => !prev)}
                className={s.toggleBtn}
                data-testid='toggleBtn'
            >
                <span>{collapsed ? '»' : '«'}</span>
            </Button>
        ),
        [collapsed],
    );

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
            {toggleButton}
        </aside>
    );
};

export const Sidebar = memo(SidebarComponent);
