import { Suspense } from 'react';
import { Loader, Modal } from '@/shared/ui';
import { RegisterFormAsync } from '../RegisterForm/RegisterForm.async';

interface RegisterModalProps {
    isOpen: boolean;
    onCloseModal: () => void;
}

export const RegisterModal = ({ isOpen, onCloseModal }: RegisterModalProps) => (
    <Modal isOpen={isOpen} onClose={onCloseModal} width={400} lazy>
        <Suspense fallback={<Loader />}>
            <RegisterFormAsync onCloseModal={onCloseModal} />
        </Suspense>
    </Modal>
);
