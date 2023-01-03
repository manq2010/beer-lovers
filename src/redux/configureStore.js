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
//   middleware: (getDefaultMiddleware) => getDefaultMiddleware({
//     serializableCheck: {
//       // Ignore these action types
//       ignoredActions: ['your/action/type'],
//       // Ignore these field paths in all actions
//       ignoredActionPaths: ['meta.arg', 'payload.timestamp'],
//       // Ignore these paths in the state
//       ignoredPaths: ['items.dates'],
//     },
//   }),
});

export default store;
