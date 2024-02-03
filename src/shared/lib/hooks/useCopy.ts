import { useCallback, useState } from 'react';

type UseCopyResult = {
    handleCopy: (text: string) => () => void;
    isCopied: boolean;
};

export const useCopy = (timeout = 2000): UseCopyResult => {
    const [isCopied, setIsCopied] = useState(false);

    const handleCopy = useCallback(
        (text: string) => () => {
            try {
                if (isCopied) {
                    return;
                }

                navigator.clipboard.writeText(text);
                setIsCopied(true);
                setTimeout(() => {
                    setIsCopied(false);
                }, timeout);
            } catch (error) {
                // eslint-disable-next-line no-console
                console.error(error);
                setIsCopied(false);
            }
        },
        [isCopied],
    );

    return { handleCopy, isCopied };
};
