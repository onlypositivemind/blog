import { useForm } from 'react-hook-form';
import { Button } from '@/shared/ui';
import s from './CommentForm.module.scss';

interface CommentFormProps {
    onSendComment: (comment: string) => void;
    className?: string;
}

interface FormValues {
    comment: string;
}

const CommentForm = ({ className, onSendComment }: CommentFormProps) => {
    const { register, handleSubmit, resetField } = useForm<FormValues>({ mode: 'onSubmit' });

    const onSubmit = async ({ comment }: FormValues) => {
        onSendComment(comment);
        resetField('comment');
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={className}>
            <textarea
                placeholder={'Write a comment...'}
                {...register('comment', {
                    required: true,
                })}
                className={s.pole}
            />
            {/* eslint-disable-next-line i18next/no-literal-string */}
            <Button type='submit' theme='primary'>
                Send
            </Button>
        </form>
    );
};

export default CommentForm;
