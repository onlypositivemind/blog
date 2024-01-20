import { Suspense } from 'react';
import { LoginForm } from '@/features/UserLogin';
import { RegisterForm } from '@/features/UserRegister';
import { Loader, Modal } from '@/shared/ui';
import { AuthModalView } from '../model/types';

interface AuthModalProps {
    isOpen: boolean;
    currentModal: AuthModalView;
    onCloseModal: () => void;
    onChangeModalView: () => void;
}

export const AuthModal = ({
    isOpen,
    onCloseModal,
    currentModal,
    onChangeModalView,
}: AuthModalProps) => {
    if (!currentModal) {
        onCloseModal();
        return null;
    }

    return (
        <Modal isOpen={isOpen} onClose={onCloseModal} width={420} hasCloseClickOutside={false} lazy>
            <Suspense fallback={<Loader />}>
                {currentModal === 'register' ? (
                    <RegisterForm
                        onCloseModal={onCloseModal}
                        onChangeModalView={onChangeModalView}
                    />
                ) : (
                    <LoginForm onCloseModal={onCloseModal} onChangeModalView={onChangeModalView} />
                )}
            </Suspense>
        </Modal>
    );
};
