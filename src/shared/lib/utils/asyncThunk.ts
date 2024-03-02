import axios from 'axios';

const getErrorMessageAsyncThunk = (err: unknown, errMessage: string) => {
    let resultErrorMessage = errMessage;

    if (axios.isAxiosError(err)) {
        resultErrorMessage = err.response?.data.message || errMessage;
    }

    return resultErrorMessage;
};

export { getErrorMessageAsyncThunk };
