import { memo, useMemo, useState } from 'react';
import s from './Sidebar.module.scss';
import cn from 'classnames';
import { Navbar } from '@/widgets/Navbar';
import { Button } from '@/shared/ui/Button';
import BurgerIcon from '@/shared/assets/icons/burger.svg';

interface SidebarProps {
    className?: string;
}

const SidebarComponent = (props: SidebarProps) => {
    const { className } = props;
    const [collapsed, setCollapsed] = useState(false);

    const toggleButton = useMemo(
        () => (
            <Button theme='clear' onClick={() => setCollapsed((prev) => !prev)}>
                <BurgerIcon className={s.icon} />
            </Button>
        ),
        [],
    );

    return (
        <aside
            className={cn(s.sidebar, className, { [s.collapsed]: collapsed })}
        >
            {toggleButton}
            <Navbar collapsed={collapsed} />
        </aside>
    );
};

export const Sidebar = memo(SidebarComponent);
