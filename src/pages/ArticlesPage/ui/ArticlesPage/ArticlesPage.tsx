import { Link } from 'react-router-dom';
import { getRouteArticle } from '@/shared/const';

// eslint-disable-next-line i18next/no-literal-string
const ArticlesPage = () => <Link to={getRouteArticle('1')}>Article 1</Link>;

export default ArticlesPage;
