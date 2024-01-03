import { useCallback, useState } from 'react';

type UserHoverResult = [boolean, { onMouseEnter: () => void; onMouseLeave: () => void }];

export const useHover = (): UserHoverResult => {
    const [isHover, setIsHover] = useState(false);

    const onMouseEnter = useCallback(() => {
        setIsHover(true);
    }, []);

    const onMouseLeave = useCallback(() => {
        setIsHover(false);
    }, []);

    return [isHover, { onMouseEnter, onMouseLeave }];
};
