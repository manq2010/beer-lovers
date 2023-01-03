/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../utils/axios';

// Initial state for Redux store:
const initialState = {
  beers: [],
  isLoading: true,
  status: 'idle',
  error: '',
  showNavMenu: false,
};

export const fetchBeers = createAsyncThunk(
  'beers/fetchBeers',
  async () => {
    const response = await axios.get('/beers/1');
    // const beersArray = Object.keys(response.data).map((key) => ({
    //   id: key,
    //   ...response.data[key],
    // }));

    // const beers = beersArray.slice().map((beer) => ({
    //   reserved: false,
    //   toogleShow: true,
    //   beer_id: beer.id,
    //   beer_name: beer.name,
    // }));

    console.log('respose', response);
    return response;
  },
);

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
    toggleNavMenu: (state) => {
      state.showNavMenu = !state.showNavMenu;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBeers.pending, (state) => {
        state.isLoading = true;
        state.status = 'loading';
      })
      .addCase(fetchBeers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.beers = action.payload;
        state.status = 'succeeded';
      })
      .addCase(fetchBeers.rejected, (state, action) => {
        state.isLoading = false;
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { setBeers, toggleNavMenu } = beerSlice.actions;

export default beerSlice.reducer;
