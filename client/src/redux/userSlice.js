import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentUser: null,
  loading: false,
  error: false
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginStart: state => {
      state.loading = true;
    },
    loginSuccess: (state, actions) => {
      state.loading = false;
      state.currentUser = actions.payload;
    },
    loginFailed: state => {
      state.loading = false;
      state.error = true;
    },
    logout: () => {
      return initialState;
    }
  }
});

export const {
  loginStart,
  loginSuccess,
  loginFailed,
  logout
} = userSlice.actions;

export default userSlice.reducer;
