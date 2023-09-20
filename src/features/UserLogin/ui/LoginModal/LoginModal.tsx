import { Suspense } from 'react';
import { Loader, Modal } from '@/shared/ui';
import { LoginFormAsync } from '../LoginForm/LoginForm.async';

interface LoginModalProps {
    isOpen: boolean;
    onCloseModal: () => void;
}

export const LoginModal = ({ isOpen, onCloseModal }: LoginModalProps) => (
    <Modal isOpen={isOpen} onClose={onCloseModal} width={400} lazy>
        <Suspense fallback={<Loader />}>
            <LoginFormAsync onCloseModal={onCloseModal} />
        </Suspense>
    </Modal>
);
