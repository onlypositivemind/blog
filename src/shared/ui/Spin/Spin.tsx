import cn from 'classnames';
import s from './Spin.module.scss';

interface LoaderProps {
    className?: string;
}

export const Spin = ({ className }: LoaderProps) => (
    <div className={cn(className, s.spin)}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>
);
