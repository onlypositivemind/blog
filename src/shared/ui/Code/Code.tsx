import cn from 'classnames';
import { memo } from 'react';
import { CopyButton } from '../Button/CopyButton/CopyButton';
import s from './Code.module.scss';

interface CodeProps {
    code: string;
    className?: string;
}

const CodeComponent = ({ className, code }: CodeProps) => (
    <pre className={cn(className, s.code)}>
        <code>{code}</code>
        <CopyButton text={code} size='xl' className={s.copyBtn} />
    </pre>
);

export const Code = memo(CodeComponent);
