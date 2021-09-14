import { createAsyncThunk } from '@reduxjs/toolkit';

import { checkCustomerEligibility } from './checkCustomerEligibilityService';

export const fetchCustomerEligibilityThunk = createAsyncThunk(
    'CheckCustomerEligibility/fetchCustomerEligibility',
    async (requestBody) => {
        const { purchasePrice, yearlyIncome, creditScore } = requestBody;

        const payload = {
            ...requestBody,
            purchasePrice: parseInt(purchasePrice),
            yearlyIncome: parseInt(yearlyIncome),
            creditScore: parseInt(creditScore),
        }

        const response = await checkCustomerEligibility(payload);
        return response;
    }
);