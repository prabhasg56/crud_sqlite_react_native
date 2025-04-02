import { createSlice } from '@reduxjs/toolkit';

const itemsSlice = createSlice({
  name: 'items',
  initialState: {
    items: [],
  },
  reducers: {
    setItems: (state, action) => {
      // console.log("setItems", action);
      state.items = action.payload?.reverse();
    },
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    updateItemState: (state, action) => {
      const index = state.items.findIndex(item => item.id === action.payload.id);
      if (index !== -1) {
        state.items[index] = action.payload;
      }
    },
    removeItem: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
  },
});

export const { setItems, addItem, updateItemState, removeItem } = itemsSlice.actions;
export default itemsSlice.reducer;
