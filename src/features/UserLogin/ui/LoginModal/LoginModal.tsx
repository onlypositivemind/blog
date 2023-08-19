import { Modal } from '@/shared/ui';
import { LoginForm } from '../LoginForm/LoginForm';

interface LoginModalProps {
    isOpen: boolean;
    onCloseModal: () => void;
}

export const LoginModal = (props: LoginModalProps) => {
    const { isOpen, onCloseModal } = props;

    return (
        <Modal isOpen={isOpen} onClose={onCloseModal} width={320} lazy>
            <LoginForm />
        </Modal>
    );
};
