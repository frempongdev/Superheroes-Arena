import { configureStore } from '@reduxjs/toolkit';
import navReducer from './redux/navbar/NavbarSlice';
import searchReducer from './redux/navbar/SearchSlice';
import fetchHeroReducer from './redux/navbar/HeroSlice';

const store = configureStore({
  reducer: {
    nav: navReducer,
    search: searchReducer,
    fetchHero: fetchHeroReducer,
  },
});

export default store;
