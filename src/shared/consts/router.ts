const getRouteHome = () => '/';

const getRouteAbout = () => '/about';

const getRouteArticles = () => '/articles';

const getRouteArticle = (id: string) => `/articles/${id}`;

const getRouteProfile = (username: string) => `/profile/${username}`;

export { getRouteHome, getRouteAbout, getRouteArticles, getRouteArticle, getRouteProfile };
