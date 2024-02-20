import { Suspense, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectUserInited, userActions } from '@/entities/User';
import { Header } from '@/widgets/Header';
import { PageLoader } from '@/widgets/PageLoader';
import { Sidebar } from '@/widgets/Sidebar';
import { useAppDispatch } from '@/shared/lib/hooks';
import { AppRouter } from './providers/AppRouter';
import './styles/index.scss';

export const App = () => {
    const dispatch = useAppDispatch();
    const inited = useSelector(selectUserInited);

    // useEffect(() => { // TODO Когда будет готов сервер
    //     dispatch(checkUserAuth());
    // }, []);

    useEffect(() => {
        dispatch(
            userActions.setAuthData({
                user: {
                    id: '1',
                    email: 'admin@gmail.com',
                    username: 'admin',
                    roles: ['SystemAdmin'],
                    avatar: 'https://avatars.githubusercontent.com/u/109303573?v=4',
                },
                accessToken: 'accessToken',
            }),
        );
    }, []);

    return (
        <div className='app'>
            {inited ? (
                <Suspense fallback=''>
                    <Header />
                    <div className='content-page'>
                        <Sidebar />
                        <main>
                            <AppRouter />
                        </main>
                    </div>
                </Suspense>
            ) : (
                <PageLoader />
            )}
        </div>
    );
};
