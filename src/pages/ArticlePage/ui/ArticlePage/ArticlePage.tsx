import { Navigate, useParams } from 'react-router-dom';
import { Article } from '@/entities/Article';
import { getRouteArticles } from '@/shared/consts';
import type { ReducersList } from '@/shared/lib/components';
import { DynamicModuleLoader } from '@/shared/lib/components';
import { articlePageReducer } from '../../model/slice';
import { ArticleComments } from '../ArticleComments/ArticleComments';

const reducers: ReducersList = {
    articlePage: articlePageReducer,
};

const ArticlePage = () => {
    const { id } = useParams<{ id: string }>();

    if (!id || Number.isNaN(+id)) {
        return <Navigate to={getRouteArticles()} />;
    }

    return (
        <DynamicModuleLoader reducers={reducers}>
            <Article id={id} className='mb-10' />
            <ArticleComments articleId={id} />
        </DynamicModuleLoader>
    );
};

export default ArticlePage;
