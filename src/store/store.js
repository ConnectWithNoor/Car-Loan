
import { configureStore } from '@reduxjs/toolkit';
import checkCustomerEligibilityReducer from '../features/CheckCustomerEligibility/checkCustomerEligibilitySlice';

export const store = configureStore({
    reducer: {
        eligibility: checkCustomerEligibilityReducer,
    },
});