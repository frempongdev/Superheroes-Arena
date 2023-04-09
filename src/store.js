import { configureStore } from '@reduxjs/toolkit';
import navReducer from './redux/navbar/NavbarSlice';

const store = configureStore({
  reducer: {
    nav: navReducer,
  },
});

export default store;
