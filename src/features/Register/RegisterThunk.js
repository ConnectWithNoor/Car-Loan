
import { createAsyncThunk } from '@reduxjs/toolkit';

import { userRegistration } from './RegisterService';

export const fetchUserRegistration = createAsyncThunk(
    'register/fetchUserRegistration',
    async (requestBody) => {

        const payload = {
            ...requestBody
        }

        const response = await userRegistration(payload);
        return response;
    }
);