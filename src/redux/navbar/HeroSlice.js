import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchHero = createAsyncThunk('hero/fetchHero', async (id) => {
  const url = `https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/id/${id}.json`;
  const response = await fetch(url);
  const data = await response.json();
  // console.log(data);
  // console.log(url);
  return data;
});

const initialState = {
  heroDetails: {},
  isLoading: false,
};

const heroSlice = createSlice({
  name: 'hero',
  initialState,
  reducers: {
    clearFetch: (state) => {
      // eslint-disable-next-line no-param-reassign
      state.heroDetails = {};
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchHero.pending, (state) => ({ ...state, isLoading: true }))
      .addCase(fetchHero.fulfilled, (state, { payload }) => (
        { ...state, isLoading: false, heroDetails: payload }))
      .addCase(fetchHero.rejected, (state) => ({ ...state, isLoading: true }));
  },
});

export const { clearFetch } = heroSlice.actions;
export default heroSlice.reducer;
