/* eslint-disable @typescript-eslint/no-explicit-any */
export const equals = (a: any, b: any) => {
    if (typeof a !== typeof b) {
        return false;
    }

    if (typeof a !== 'object' || a === null) {
        return Object.is(a, b);
    }

    const fistParamIsArray = Array.isArray(a);
    const secondParamIsArray = Array.isArray(b);

    if (fistParamIsArray && secondParamIsArray) {
        if (a.length !== b.length) {
            return false;
        }
    }

    if ((fistParamIsArray && !secondParamIsArray) || (secondParamIsArray && !fistParamIsArray)) {
        return false;
    }

    if (!fistParamIsArray && !secondParamIsArray) {
        if (Object.keys(a).length !== Object.keys(b).length) {
            return false;
        }
    }

    for (const key in a) {
        if (!equals(a[key], b[key])) {
            return false;
        }
    }

    return true;
};
