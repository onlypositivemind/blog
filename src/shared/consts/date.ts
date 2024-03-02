const DateTimeFormatOptions = {
    BASE: {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
    },
    FULL_LONG: {
        year: 'numeric',
        month: 'long',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
    },
} as const;

export { DateTimeFormatOptions };
