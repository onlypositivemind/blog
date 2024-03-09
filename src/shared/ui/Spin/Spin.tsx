import cn from 'classnames';
import s from './Spin.module.scss';

interface SpinProps {
    className?: string;
}

export const Spin = ({ className }: SpinProps) => (
    <div className={cn(s.spin, className)}>
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
    </div>
);
