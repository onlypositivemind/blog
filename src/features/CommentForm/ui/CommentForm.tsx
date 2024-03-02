import cn from 'classnames';
import { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { selectUser } from '@/entities/User';
import { I18nNamespace } from '@/shared/consts';
import { Button } from '@/shared/ui';
import { CommentFormSkeleton } from '../ui/CommentFormSkeleton';
import s from './CommentForm.module.scss';

interface CommentFormProps {
    onSendComment: (comment: string, resetComment?: () => void) => void;
    isLoading?: boolean;
    disabled?: boolean;
    errorMessage?: string;
    className?: string;
}

interface FormValues {
    comment: string;
}

const CommentForm = ({
    onSendComment,
    isLoading,
    disabled,
    errorMessage,
    className,
}: CommentFormProps) => {
    const { t } = useTranslation(I18nNamespace.COMMENTS);
    const { register, handleSubmit, resetField } = useForm<FormValues>({ mode: 'onSubmit' });
    const user = useSelector(selectUser);

    const handleResetComment = useCallback(() => {
        resetField('comment');
    }, [resetField]);

    const onSubmit = useCallback(
        async ({ comment }: FormValues) => {
            onSendComment(comment, handleResetComment);
        },
        [handleResetComment, onSendComment],
    );

    if (!user) {
        return <p className={cn(s.noAuthTitle, className)}>{t('NoAuthUserInfoTitle')}</p>;
    }

    return (
        <section className={className}>
            <h2 className={s.formTitle}>{t('CommentFormTitle')}</h2>
            {isLoading ? (
                <CommentFormSkeleton />
            ) : (
                <form onSubmit={handleSubmit(onSubmit)}>
                    <textarea
                        disabled={disabled}
                        placeholder={t('CommentFormPlaceholder')}
                        {...register('comment', {
                            required: true,
                        })}
                        className={s.commentField}
                    />
                    {errorMessage && <p className={s.errorMessage}>{t(errorMessage)}</p>}
                    <Button type='submit' theme='primary' disabled={disabled}>
                        {t('Send')}
                    </Button>
                </form>
            )}
        </section>
    );
};

export default CommentForm;
