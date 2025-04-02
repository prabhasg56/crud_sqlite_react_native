import { configureStore } from '@reduxjs/toolkit';
import itemsReducer from './Features/itemsSlice';

export const store = configureStore({
  reducer: {
    items: itemsReducer,
  },
});
