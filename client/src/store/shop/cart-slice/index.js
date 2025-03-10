import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  cartItems: [],
  isLoading: false,
};

export const addToCart = createAsyncThunk(
  "cart/addTocart",
  async ({ userId, productId, quantity }) => {
    const response = await axios.post(
      "http://localhost:3000/api/shop/cart/add",
      {
        userId,
        productId,
        quantity,
      }
    );

    return response.data;
  }
);

export const fetchCartItems = createAsyncThunk(
  "cart/fetchCartItems",
  async (userId) => {
    const response = await axios.get(
      `http://localhost:3000/api/shop/cart/get/${userId}`,
     
    );

    return response.data;
  }
);

export const deletecartItem = createAsyncThunk(
  "cart/deletecartItem",
  async ({ userId, productId }) => {
    const response = await axios.delete(
      `http://localhost:3000/api/shop/cart/delete/${userId}/${productId}`,
      {
        userId,
        productId,
      }
    );

    return response.data;
  }
);

export const updateCartItem = createAsyncThunk(
  "cart/updateCartItem",
  async ({ userId, productId, quantity }) => {
    const response = await axios.put(
      "http://localhost:3000/api/shop/cart/add",
      {
        userId,
        productId,
        quantity,
      }
    );

    return response.data;
  }
);

const shoppingCartSlice = createSlice({
  name: "shoppingCart",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addToCart.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addToCart.fulfilled, (state, action) => {
        state.isLoading = false;
        state.cartItems = action.payload.data;
      })
      .addCase(addToCart.rejected, (state) => {
        state.isLoading = false;
        state.cartItems = [];
      })
      .addCase(fetchCartItems.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchCartItems.fulfilled, (state, action) => {
        state.isLoading = false;
        state.cartItems = action.payload.data;
      })
      .addCase(fetchCartItems.rejected, (state) => {
        state.isLoading = false;
        state.cartItems = [];
      })
      .addCase(updateCartItem.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateCartItem.fulfilled, (state, action) => {
        state.isLoading = false;
        state.cartItems = action.payload.data;
      })
      .addCase(updateCartItem.rejected, (state) => {
        state.isLoading = false;
        state.cartItems = [];
      })
      .addCase(deletecartItem.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deletecartItem.fulfilled, (state, action) => {
        state.isLoading = false;
        state.cartItems = action.payload.data;
      })
      .addCase(deletecartItem.rejected, (state) => {
        state.isLoading = false;
        state.cartItems = [];
      });
  },
});

export default shoppingCartSlice.reducer;
