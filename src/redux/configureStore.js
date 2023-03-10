// Import configureStore() from Redux toolkit:
import { configureStore } from '@reduxjs/toolkit';
// import reducers
import beerReducer from './BeerSlice/beerSlice';
// Create Redux store:
const store = configureStore({
  reducer: {
    // Add beer reducer
    beerReducer,
  },
});

export default store;
