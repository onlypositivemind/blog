import axios from 'axios';

export const getErrorMessageAsyncThunk = (err: unknown, errMessage: string) => {
    let resultErrorMessage = errMessage;

    if (axios.isAxiosError(err)) {
        resultErrorMessage = err.response?.data.message || errMessage;
    }

    return resultErrorMessage;
};
