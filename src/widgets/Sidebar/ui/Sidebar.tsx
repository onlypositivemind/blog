import cn from 'classnames';
import { memo, useMemo, useState } from 'react';
import { LangSwitcher } from '@/features/LangSwitcher';
import { ThemeSwitcher } from '@/features/ThemeSwitcher';
import { Navbar } from '@/widgets/Navbar';
import { Button } from '@/shared/ui';
import BurgerIcon from '@/shared/assets/icons/burger.svg';
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
                data-testid='toggleBtn'
            >
                <BurgerIcon className={s.icon} />
            </Button>
        ),
        [],
    );

    return (
        <aside
            className={cn(s.sidebar, className, { [s.collapsed]: collapsed })}
            data-testid='sidebar'
        >
            {toggleButton}
            <Navbar collapsed={collapsed} />
            <div className={s.switchers}>
                <ThemeSwitcher className={s.switcher} />
                <LangSwitcher className={s.switcher} />
            </div>
        </aside>
    );
};

export const Sidebar = memo(SidebarComponent);
