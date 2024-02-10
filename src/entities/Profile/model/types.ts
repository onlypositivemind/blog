import type { Country } from '@/entities/Country';
import type { Currency } from '@/entities/Currency';

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
