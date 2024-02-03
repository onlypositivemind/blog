import cn from 'classnames';
import React, { memo } from 'react';
import { useCopy } from '../../../lib/hooks';
import type { AppIconSize } from '../../AppIcon/AppIcon';
import { AppIcon } from '../../AppIcon/AppIcon';
import { Button } from '../Button';
import CheckIcon from '@/shared/assets/icons/check.svg';
import CopyIcon from '@/shared/assets/icons/copy.svg';
import s from './CopyButton.module.scss';

type CopyButtonProps = {
    text: string;
    size?: AppIconSize;
    className?: string;
};

const CopyButtonComponent = ({ text, className, size }: CopyButtonProps) => {
    const { handleCopy, isCopied } = useCopy();

    return (
        <div className={cn(className, { [s.copied]: isCopied })}>
            <Button onClick={handleCopy(text)}>
                <AppIcon
                    Icon={isCopied ? CheckIcon : CopyIcon}
                    size={size}
                    className={s.copyIcon}
                />
            </Button>
        </div>
    );
};

export const CopyButton = memo(CopyButtonComponent);
