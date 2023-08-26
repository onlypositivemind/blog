import { CounterSchema } from '@/entities/Counter';
import { UserSchema } from '@/entities/User';
import { LoginSchema } from '@/features/UserLogin';

export interface StateSchema {
    counter: CounterSchema;
    user: UserSchema;
    loginForm: LoginSchema;
}
