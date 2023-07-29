import cn from 'classnames';
import { memo } from 'react';
import s from './Loader.module.scss';

interface LoaderProps {
    className?: string;
}

const LoaderComponent = ({ className }: LoaderProps) => (
    <div className={cn(s.loader, className)}>
        <div />
        <div />
        <div />
        <div />
    </div>
);

export const Loader = memo(LoaderComponent);
