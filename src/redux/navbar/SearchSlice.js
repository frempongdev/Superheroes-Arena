import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// const apiUrl = 'https://superheroapi.com/api/10223015174750967/search/batma';
// const corsUrl = 'https://cors.bridged.cc/';

const initialState = {
  searched: [],
  allHeroes: [],
  isSearching: false,
};

export const searchHero = createAsyncThunk('search/searchHero', async (input) => {
  const url = 'https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json';
  // console.log(url);
  const response = await fetch(url);
  const data = await response.json();
  // console.log(data);
  // console.log(input);
  const searchResults = data.filter(
    (hero) => hero.name.toLowerCase().includes(input.toLowerCase()),
  );
  // console.log(searchResults);
  return searchResults;
});

export const fetchAllHeroes = createAsyncThunk('search/fetchAllHeroes', async () => {
  const url = 'https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json';
  const response = await fetch(url);
  const data = await response.json();
  return data;
});

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    clearSearch: (state) => {
      // eslint-disable-next-line no-param-reassign
      state.searched = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(searchHero.pending, (state) => ({ ...state, isSearching: true }))
      .addCase(searchHero.fulfilled, (state, action) => (
        { ...state, isSearching: false, searched: action.payload }))
      .addCase(searchHero.rejected, (state) => ({ ...state, isSearching: false }))
      .addCase(fetchAllHeroes.pending, (state) => ({ ...state, isSearching: true }))
      .addCase(fetchAllHeroes.fulfilled, (state, action) => (
        { ...state, isSearching: false, allHeroes: action.payload }))
      .addCase(fetchAllHeroes.rejected, (state) => ({ ...state, isSearching: false }));
  },
});

export const { clearSearch } = searchSlice.actions;
export default searchSlice.reducer;
