import cn from 'classnames';
import s from './Spin.module.scss';

interface LoaderProps {
    className?: string;
}

export const Spin = ({ className }: LoaderProps) => (
    <div className={cn(s.spin, className)}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>
);
