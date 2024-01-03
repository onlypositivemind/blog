import { useCallback, useState } from 'react';

interface UseModalResult {
    isModalOpen: boolean;
    onOpenModal: () => void;
    onCloseModal: () => void;
}

export const useModal = (initialValue = false): UseModalResult => {
    const [isModalOpen, setIsModalOpen] = useState(initialValue);

    const onOpenModal = useCallback(() => {
        setIsModalOpen(true);
    }, []);

    const onCloseModal = useCallback(() => {
        setIsModalOpen(false);
    }, []);

    return { isModalOpen, onOpenModal, onCloseModal };
};
