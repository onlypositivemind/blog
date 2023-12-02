import axios from 'axios';

export const getErrorMessageAsyncThunk = (err: unknown, baseErrMessage: string) => {
    let resultErrorMessage = baseErrMessage;

    if (axios.isAxiosError(err)) {
        resultErrorMessage = err.response?.data.message || baseErrMessage;
    }

    return resultErrorMessage;
};
