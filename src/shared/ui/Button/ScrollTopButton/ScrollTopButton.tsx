import cn from 'classnames';
import { useCallback, useEffect, useState } from 'react';
import { useThrottle } from '@/shared/lib/hooks';
import { AppIcon } from '@/shared/ui';
import { Button } from '../Button';
import ArrowIcon from '@/shared/assets/icons/arrow.svg';
import s from './ScrollTopButton.module.scss';

interface ScrollTopButtonProps {
    containerSelector?: Parameters<typeof document.querySelector>[0];
    className?: string;
}

export const ScrollTopButton = ({
    containerSelector = 'main',
    className,
}: ScrollTopButtonProps) => {
    const [isVisible, setIsVisible] = useState(false);
    const [isWasClicked, setIsWasClicked] = useState(false);

    const handleClickScrollTop = useCallback(() => {
        document.querySelector(containerSelector)?.scroll({ top: 0, behavior: 'smooth' });
        setIsWasClicked(true);
        setIsVisible(false);

        setTimeout(() => {
            setIsWasClicked(false);
        }, 1500);
    }, [containerSelector]);

    const handleScroll = useThrottle((ev: Event) => {
        if (!ev.target || !('scrollTop' in ev.target)) {
            return;
        }

        if (isWasClicked && ev.target.scrollTop === 0) {
            setIsWasClicked(false);
        }

        setIsVisible((ev.target.scrollTop || 0) > 300);
    }, 300);

    useEffect(() => {
        document.querySelector(containerSelector)?.addEventListener('scroll', handleScroll);

        return () => {
            document.querySelector(containerSelector)?.removeEventListener('scroll', handleScroll);
        };
    }, [containerSelector]);

    return (
        <Button
            size='xl'
            onClick={handleClickScrollTop}
            className={cn(s.btn, { [s.visible]: isVisible && !isWasClicked }, className)}
            aria-label='Scroll to top'
        >
            <AppIcon Icon={ArrowIcon} />
        </Button>
    );
};
