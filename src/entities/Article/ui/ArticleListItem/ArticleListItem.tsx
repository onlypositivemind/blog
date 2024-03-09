import cn from 'classnames';
import { Link } from 'react-router-dom';
import { getRouteArticle } from '@/shared/consts';
import type { Article, ArticleAppearance } from '../../model/types/article';
import s from './ArticleListItem.module.scss';

interface ArticleListItemProps {
    article: Article;
    appearance: ArticleAppearance;
    isLoading?: boolean;
    className?: string;
}

export const ArticleListItem = ({
    article,
    isLoading,
    appearance,
    className,
}: ArticleListItemProps) => {
    if (isLoading) {
        // eslint-disable-next-line i18next/no-literal-string
        return <p>ArticleListItem Loading...</p>;
    }

    return (
        <article className={cn(s.article, s[appearance], className)}>
            <Link to={getRouteArticle(article.id)}>{article.title}</Link>
        </article>
    );
};
