import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  searched: [],
};

// const searchHero

const searchSlice = createSlice({
  name: 'searched',
  initialState,
  reducers: {},
});

export default searchSlice.reducer;
