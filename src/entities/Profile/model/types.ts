import { Country, Currency } from '@/shared/types';

export interface Profile {
    id?: string;
    email?: string;
    username?: string;
    firstname?: string;
    lastname?: string;
    age?: number;
    currency?: Currency;
    country?: Country;
    avatar?: string;
}
