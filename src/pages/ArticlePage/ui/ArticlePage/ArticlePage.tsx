import { useSelector } from 'react-redux';
import { Navigate, useParams } from 'react-router-dom';
import { Article, selectArticleIsLoading } from '@/entities/Article';
import { getRouteArticles } from '@/shared/consts';
import type { ReducersList } from '@/shared/lib/components';
import { DynamicModuleLoader } from '@/shared/lib/components';
import { ScrollTopButton } from '@/shared/ui';
import { articlePageReducer } from '../../model/slice';
import { ArticleComments } from '../ArticleComments/ArticleComments';

const reducers: ReducersList = {
    articlePage: articlePageReducer,
};

const ArticlePage = () => {
    const { id } = useParams<{ id: string }>();
    const isArticleLoading = useSelector(selectArticleIsLoading);

    if (!id || Number.isNaN(+id)) {
        return <Navigate to={getRouteArticles()} />;
    }

    return (
        <DynamicModuleLoader reducers={reducers}>
            <>
                <Article id={id} className='mb-11' />
                <ArticleComments articleId={id} />
                {!isArticleLoading && <ScrollTopButton />}
            </>
        </DynamicModuleLoader>
    );
};

export default ArticlePage;
