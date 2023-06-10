import { Header } from '@/widgets/Header';
import { Sidebar } from '@/widgets/Sidebar';
import { AppRouter } from './providers/AppRouter';
import './styles/index.scss';

export const App = () => {
    return (
        <div className='app'>
            <Header />
            <div className='content-page'>
                <Sidebar />
                <main>
                    <AppRouter />
                </main>
            </div>
        </div>
    );
};
