import { Navigate, useParams } from 'react-router-dom';
import { Article } from '@/entities/Article';
import { getRouteArticles } from '@/shared/const';

const ArticlePage = () => {
    const { id } = useParams<{ id: string }>();

    if (!id || Number.isNaN(+id)) {
        return <Navigate to={getRouteArticles()} />;
    }

    return <Article id={id} />;
};

export default ArticlePage;
