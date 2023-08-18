import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    add(state, action) {
      //redux
      //return [...state,action.payload]
      state.push(action.payload);
    },
    remove(state, action) {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

export const { add, remove } = cartSlice.actions;

export default cartSlice.reducer;

// Thunks
export function fetchProducts() {
  return async function fetchProductThunk(dispatch, getState) {
    try {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      dispatch(setProducts(data));
    } catch (error) {}
  };
}
