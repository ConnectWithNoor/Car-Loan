import { configureStore } from '@reduxjs/toolkit';
import checkCustomerEligibilityReducer from '../features/CheckCustomerEligibility/checkCustomerEligibilitySlice';
import registerReducer from '../features/Register/RegisterSlice';

export const store = configureStore({
  reducer: {
    eligibility: checkCustomerEligibilityReducer,
    registration: registerReducer
  },
});