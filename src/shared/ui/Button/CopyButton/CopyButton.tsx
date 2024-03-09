import cn from 'classnames';
import React, { memo } from 'react';
import { useCopy } from '../../../lib/hooks';
import { AppIcon } from '../../AppIcon/AppIcon';
import { Button } from '../Button';
import CheckIcon from '@/shared/assets/icons/check.svg';
import CopyIcon from '@/shared/assets/icons/copy.svg';
import s from './CopyButton.module.scss';

type CopyButtonProps = {
    text: string;
    className?: string;
};

const CopyButtonComponent = ({ text, className }: CopyButtonProps) => {
    const { handleCopy, isCopied } = useCopy();

    return (
        <div className={cn({ [s.copied]: isCopied }, className)}>
            <Button size='xl' onClick={handleCopy(text)} aria-label='Copy'>
                <AppIcon Icon={isCopied ? CheckIcon : CopyIcon} className={s.copyIcon} />
            </Button>
        </div>
    );
};

export const CopyButton = memo(CopyButtonComponent);
