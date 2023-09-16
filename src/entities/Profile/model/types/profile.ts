import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';

export interface Profile {
    id?: string;
    firstname?: string;
    lastname?: string;
    age?: number;
    username?: string;
    avatar?: string;
    currency?: Currency;
    country?: Country;
    city?: string;
}

export interface ProfileSchema {
    isEdit: boolean;
    isLoading: boolean;
    data?: Profile;
    errorMessage?: string;
}
