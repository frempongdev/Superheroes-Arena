import { configureStore } from '@reduxjs/toolkit';
import navReducer from './redux/navbar/NavbarSlice';
import searchReducer from './redux/navbar/SearchSlice';

const store = configureStore({
  reducer: {
    nav: navReducer,
    search: searchReducer,
  },
});

export default store;
