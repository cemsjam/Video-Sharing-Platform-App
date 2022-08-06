import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentVideo: null,
  loading: false,
  error: false
};

export const videoSlice = createSlice({
  name: 'video',
  initialState,
  reducers: {
    fetchStart: state => {
      state.loading = true;
    },
    fetchSuccess: (state, actions) => {
      state.loading = false;
      state.currentVideo = actions.payload;
    },
    fetchFailed: state => {
      state.loading = false;
      state.error = true;
    }
  }
});

export const { fetchStart, fetchSuccess, fetchFailed } = videoSlice.actions;

export default videoSlice.reducer;
