import cn from 'classnames';
import { MouseEvent, ReactNode, useCallback, useEffect, useState } from 'react';
import { Button } from '@/shared/ui';
import { Portal } from '../Portal/Portal';
import { ClosingEmoji } from '@/shared/assets/textSymbols';
import s from './Modal.module.scss';

interface ModalProps {
    children: ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
    width?: number | string;
    lazy?: boolean;
    className?: string;
}

export const Modal = ({ className, children, isOpen, onClose, width, lazy }: ModalProps) => {
    const [isMounted, setIsMounted] = useState(false);

    const handleCloseModalByKey = useCallback(
        (ev: KeyboardEvent) => {
            if (ev.key === 'Escape') {
                onClose?.();
            }
        },
        [onClose],
    );

    const handleClickContent = (ev: MouseEvent) => {
        ev.stopPropagation();
    };

    useEffect(() => {
        if (isOpen) {
            window.addEventListener('keydown', handleCloseModalByKey);
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.removeProperty('overflow');
        }

        return () => {
            window.removeEventListener('keydown', handleCloseModalByKey);
        };
    }, [handleCloseModalByKey, isOpen]);

    useEffect(() => {
        if (isOpen) {
            setIsMounted(true);
        }
    }, [isOpen]);

    if (lazy && !isMounted) {
        return null;
    }

    return (
        <Portal>
            <div className={cn(s.modalWrapper, className, { [s.opened]: isOpen })}>
                <div className={s.overlay} onClick={onClose}>
                    <div
                        className={s.content}
                        onClick={handleClickContent}
                        style={{ maxWidth: width || '50%' }}
                    >
                        {children}
                        <Button onClick={onClose} className={s.closeBtn}>
                            {ClosingEmoji}
                        </Button>
                    </div>
                </div>
            </div>
        </Portal>
    );
};
