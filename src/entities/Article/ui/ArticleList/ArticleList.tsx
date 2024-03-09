import cn from 'classnames';
import type { Article, ArticleAppearance } from '../../model/types/article';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import s from './ArticleList.module.scss';

interface ArticleListProps {
    articles: Article[];
    isLoading?: boolean;
    appearance?: ArticleAppearance;
    className?: string;
}

export const ArticleList = ({
    articles,
    isLoading,
    appearance = 'card',
    className,
}: ArticleListProps) => {
    if (isLoading) {
        // eslint-disable-next-line i18next/no-literal-string
        return <p>ArticleList Loading...</p>;
    }

    return (
        <ul className={cn(s.list, s[appearance], className)}>
            {articles.map((article) => (
                <li key={article.id}>
                    <ArticleListItem article={article} appearance={appearance} />
                </li>
            ))}
        </ul>
    );
};
