import { AppRouter } from './providers/AppRouter';
import { AppLink } from '@/shared/ui/AppLink';
import './styles/index.scss';

export const App = () => {
    return (
        <div className='app'>
            <AppLink to='/' theme='primary'>
                Main
            </AppLink>
            <AppLink to='/about'>About</AppLink>
            <main>
                <AppRouter />
            </main>
        </div>
    );
};
