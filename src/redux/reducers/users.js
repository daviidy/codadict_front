/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const signup = createAsyncThunk(
  'users/signup',
  async () => fetch('http://localhost:3000/signup').then(res => res.json()),
);

const initialState = {
  user: [],
  status: null,
};

export const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    // action    reducer
    signupPending: state => {
      state.status = 'loading';
    },
    signupFulfilled: (state, action) => {
      state.user = action.payload;
      state.status = 'success';
    },
    signupRejected: state => {
      state.status = 'failed';
    },
  },
});

// Action creators are generated for each case reducer function
export const { signupPending, signupFulfilled, signupRejected } = userSlice.actions;

export default userSlice.reducer;
