import { DateTimeFormatOptions } from '../../consts';
import type {
    DateTimeFormatOptions as TDateTimeFormatOptions,
    DateTimeUTC,
    Language,
} from '../../types';

interface DateTimeFormatParams {
    date: DateTimeUTC | Date;
    lang?: Language;
    options?: TDateTimeFormatOptions;
}

export const dateTimeFormat = ({ date, lang = 'ru', options = {} }: DateTimeFormatParams) =>
    new Intl.DateTimeFormat(lang, {
        ...DateTimeFormatOptions.BASE,
        ...options,
    })
        .format(typeof date === 'string' ? new Date(date) : date)
        .replace(' г.', '');
