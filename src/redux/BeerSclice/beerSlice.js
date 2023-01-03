/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

// Initial state for Redux store:
const initialState = {
  beers: [],
  isLoading: true,
  status: 'idle',
  error: '',
};

const beerSlice = createSlice({
  name: 'beers',
  // Define initial state
  initialState,
  reducers: {
    // Define reducers
    showProfile: (state, action) => {
      state.beers = state.beers.map((beer) => (beer.id !== action.payload
        ? beer : { ...beer, toogleShow: !beer.toogleShow }));
    },
    showIngredients: (state, action) => {
      state.beers = state.beers.map((beer) => (beer.id !== action.payload
        ? beer : { ...beer, toogleShow: !beer.toogleShow }));
    },
    showSheet: (state, action) => {
      state.beers = state.beers.map((beer) => (beer.id !== action.payload
        ? beer : { ...beer, toogleShow: !beer.toogleShow }));
    },
  },
});

export const { setBeers } = beerSlice.actions;

export default beerSlice.reducer;
