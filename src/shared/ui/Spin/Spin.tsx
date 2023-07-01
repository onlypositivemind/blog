import cn from 'classnames';
import { memo } from 'react';
import s from './Spin.module.scss';

interface LoaderProps {
    className?: string;
}

const SpinComponent = ({ className }: LoaderProps) => (
    <div className={cn(s.spin, className)}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>
);

export const Spin = memo(SpinComponent);
