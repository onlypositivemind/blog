import { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { selectUserInited } from '@/entities/User';
import { Header } from '@/widgets/Header';
import { PageLoader } from '@/widgets/PageLoader';
import { Sidebar } from '@/widgets/Sidebar';
import { AppRouter } from './providers/AppRouter';
import './styles/index.scss';

export const App = () => {
    // const dispatch = useAppDispatch();
    const inited = useSelector(selectUserInited);

    // useEffect(() => { // TODO Когда будет готов сервер
    //     dispatch(checkUserAuth());
    // }, []);

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
