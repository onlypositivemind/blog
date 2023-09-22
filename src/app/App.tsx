import { Suspense, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { checkUserAuth, selectUserInited } from '@/entities/User';
import { Header } from '@/widgets/Header';
import { PageLoader } from '@/widgets/PageLoader';
import { Sidebar } from '@/widgets/Sidebar';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { AppRouter } from './providers/AppRouter';
import './styles/index.scss';

export const App = () => {
    const dispatch = useAppDispatch();
    const inited = useSelector(selectUserInited);

    useEffect(() => {
        dispatch(checkUserAuth());
    }, [dispatch]);

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
