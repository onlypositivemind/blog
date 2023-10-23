import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';

export interface Profile {
    userId: number;
    email: string;
    username: string;
    firstname: string;
    lastname: string;
    age: number;
    currency: Currency;
    country: Country;
    city: string;
    avatar: string;
}
