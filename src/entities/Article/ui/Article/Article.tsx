import { memo } from 'react';
import { useSelector } from 'react-redux';
import { DynamicModuleLoader, ReducersList } from '@/shared/lib/components';
import { useAppDispatch, useAppEffect } from '@/shared/lib/hooks';
import {
    selectArticleData,
    selectArticleErrorMessage,
    selectArticleIsLoading,
} from '../../model/selectors/articleSelectors';
import { getArticle } from '../../model/services/getArticle';
import { articleReducer } from '../../model/slice/articleSlice';

const reducers: ReducersList = { article: articleReducer };

interface ArticleProps {
    id: string;
    className?: string;
}

const ArticleComponent = ({ id, className }: ArticleProps) => {
    const dispatch = useAppDispatch();
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const article = useSelector(selectArticleData);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const isLoading = useSelector(selectArticleIsLoading); // TODO
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const errorMessage = useSelector(selectArticleErrorMessage);
    // TODO сделать один компонент об ошибке и текст при ошибке сервера общий для всех запросов

    useAppEffect(() => {
        dispatch(getArticle(id));
    }, [id]);

    return (
        <DynamicModuleLoader reducers={reducers}>
            {/* eslint-disable-next-line i18next/no-literal-string */}
            <div className={className}>Article</div>
        </DynamicModuleLoader>
    );
};

export const Article = memo(ArticleComponent);
