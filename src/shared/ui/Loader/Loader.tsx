import cn from 'classnames';
import s from './Loader.module.scss';

interface LoaderProps {
    className?: string;
}

export const Loader = ({ className }: LoaderProps) => (
    <div className={cn(className, s.loader)}>
        <div />
        <div />
        <div />
        <div />
    </div>
);
