import { configureStore } from '@reduxjs/toolkit';

import registerReducer from '../features/Register/RegisterSlice';

export const store = configureStore({
  reducer: {
    registration: registerReducer
  },
});
