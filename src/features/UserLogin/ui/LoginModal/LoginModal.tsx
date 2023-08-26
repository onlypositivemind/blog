import { Suspense } from 'react';
import { Loader, Modal } from '@/shared/ui';
import { LoginFormAsync } from '../LoginForm/LoginForm.async';

interface LoginModalProps {
    isOpen: boolean;
    onCloseModal: () => void;
}

export const LoginModal = (props: LoginModalProps) => {
    const { isOpen, onCloseModal } = props;

    return (
        <Modal isOpen={isOpen} onClose={onCloseModal} width={320} lazy>
            <Suspense fallback={<Loader />}>
                <LoginFormAsync />
            </Suspense>
        </Modal>
    );
};
