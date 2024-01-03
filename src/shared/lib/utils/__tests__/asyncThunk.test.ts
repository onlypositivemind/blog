import { AxiosError } from 'axios';
import { getErrorMessageAsyncThunk } from '../asyncThunk';

describe('getErrorMessageAsyncThunk function', () => {
    it('should return base error message if error is not axios error', () => {
        const baseErrMessage = 'Base error message';
        const err = new Error('Some error');

        expect(getErrorMessageAsyncThunk(err, baseErrMessage)).toBe(baseErrMessage);
    });

    it('should return response data message if error is axios error', () => {
        const axiosMessage = 'Error from server';
        // @ts-ignore: No more data is required
        const axiosError = new AxiosError(undefined, undefined, undefined, undefined, {
            data: { message: axiosMessage },
        });

        expect(getErrorMessageAsyncThunk(axiosError, 'Base error message')).toBe(axiosMessage);
    });

    it('should return base error message if axios error response data message is undefined', () => {
        const baseErrMessage = 'Base error message';
        const axiosError = new AxiosError();

        expect(getErrorMessageAsyncThunk(axiosError, baseErrMessage)).toBe(baseErrMessage);
    });
});
