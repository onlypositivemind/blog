// eslint-disable-next-line i18next/no-literal-string
import { ArticleList } from '@/entities/Article';

const ArticlesPage = () => {
    return (
        <div>
            <ArticleList articles={[]} appearance='card' isLoading={false} />
        </div>
    );
};

export default ArticlesPage;
