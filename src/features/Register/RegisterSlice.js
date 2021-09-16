import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isRegistered: null,
  isLoading: false,
  error: null,
};

export const registerSlice = createSlice({
  name: 'register',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {},
  // The `extraReducers` field lets the slice handle actions defined elsewhere,
  // including actions generated by createAsyncThunk or in other slices.
  extraReducers: (builder) => {
    builder
      .addMatcher(
        (action) =>
          action.type.split('/')[0] === 'register' &&
          action.type.endsWith('/pending'),
        (state) => {
          state.isLoading = true;
          state.isRegistered = false;
        }
      )
      .addMatcher(
        (action) =>
          action.type.split('/')[0] === 'register' &&
          action.type.endsWith('/fulfilled'),
        (state, action) => {
          state.isLoading = false;
          state.isRegistered = action.payload.isRegistered;
        }
      )
      .addMatcher(
        (action) =>
          action.type.split('/')[0] === 'register' &&
          action.type.endsWith('/rejected'),
        (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
        }
      );
  },
});

export const selectIsRegistered = (state) => state.registration.isRegistered;
export const selectIsLoading = (state) => state.registration.isLoading;
export const selectError = (state) => state.registration.error;

export default registerSlice.reducer;
