// src/store/slices/cartSlice.js
import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    acceptedItems: [],
    rejectedItems: [],
    isCartOpen: false, // Manage cart visibility
  },
  reducers: {
    addItem: (state, action) => {
      const item = action.payload;
      if (item.status === "accepted") {
        if (
          !state.acceptedItems.find(
            (existingItem) => existingItem.id === item.id
          )
        ) {
          state.acceptedItems.push(item);
          state.rejectedItems = state.rejectedItems.filter(
            (existingItem) => existingItem.id !== item.id
          );
        }
      } else if (item.status === "rejected") {
        if (
          !state.rejectedItems.find(
            (existingItem) => existingItem.id === item.id
          )
        ) {
          state.rejectedItems.push(item);
          state.acceptedItems = state.acceptedItems.filter(
            (existingItem) => existingItem.id !== item.id
          );
        }
      }
    },
    removeItem: (state, action) => {
      const id = action.payload;
      state.acceptedItems = state.acceptedItems.filter(
        (item) => item.id !== id
      );
      state.rejectedItems = state.rejectedItems.filter(
        (item) => item.id !== id
      );
    },
    toggleCart: (state, action) => {
      state.isCartOpen = action.payload;
    },
  },
});

export const { addItem, removeItem, toggleCart } = cartSlice.actions;
export default cartSlice.reducer;
