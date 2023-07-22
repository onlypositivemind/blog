import cn from 'classnames';
import { MouseEvent, ReactNode, useCallback, useEffect } from 'react';
import { Portal } from '../Portal/Portal';
import s from './Modal.module.scss';

interface ModalProps {
    children: ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
    className?: string;
}

export const Modal = (props: ModalProps) => {
    const { className, children, isOpen, onClose } = props;

    const handleCloseModalByClick = () => {
        onClose?.();
    };

    const handleCloseModalByKey = useCallback(
        (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                onClose?.();
            }
        },
        [onClose],
    );

    const handleClickContent = (e: MouseEvent) => {
        e.stopPropagation();
    };

    useEffect(() => {
        if (isOpen) {
            window.addEventListener('keydown', handleCloseModalByKey);
        }

        return () => {
            window.removeEventListener('keydown', handleCloseModalByKey);
        };
    }, [handleCloseModalByKey, isOpen]);

    return (
        <Portal>
            <div className={cn(s.modalWrapper, className, { [s.opened]: isOpen })}>
                <div className={s.overlay} onClick={handleCloseModalByClick}>
                    <div className={s.content} onClick={handleClickContent}>
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    );
};
