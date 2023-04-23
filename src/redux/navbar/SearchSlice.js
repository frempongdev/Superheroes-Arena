import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  searched: [],
};

export const searchHero = createAsyncThunk('search/searchHero', async (input) => {
  const url = `https://superheroapi.com/api/10223015174750967/search/${input}`;
  const response = await fetch(url, { mode: 'cors' });
  const data = await response.json();
  console.log(data);
  return data;
});

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(searchHero.fulfilled, (state, action) => ({ ...state, searched: action.payload }));
  },

});

export default searchSlice.reducer;
