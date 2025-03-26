import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const url = import.meta.env.VITE_DOMAIN_URL;
console.log(url)

const initialState = {
  isLoading: false,
  addresslist: [],
};

export const createNewAddress = createAsyncThunk(
  "/addresses/addNewAddress",
  async (formData) => {
    const response = await axios.post(`${url}/shop/address/add`, formData);

    return response.data;
  }
);

export const fetchallAddresses = createAsyncThunk(
  "/addresses/fetchAllAddresses",
  async (userId) => {
    const response = await axios.get(`${url}/shop/address/get/${userId}`);

    return response.data;
  }
);

export const editAddress = createAsyncThunk(
  "/addresses/editAddress",
  async ({ userId, addressId, formData }) => {
    const response = await axios.put(
      `${url}/shop/address/update/${userId}/${addressId}`,
      formData
    );

    return response.data;
  }
);

export const deleteAddress = createAsyncThunk(
  "/addresses/deleteNewAddress",
  async ({ userId, addressId }) => {
    const response = await axios.delete(
      `${url}/shop/address/delete/${userId}/${addressId}`
    );

    return response.data;
  }
);

const addressSlice = createSlice({
  name: "address",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createNewAddress.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createNewAddress.fulfilled, (state, action) => {
        state.isLoading = false;
      })
      .addCase(createNewAddress.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(fetchallAddresses.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchallAddresses.fulfilled, (state, action) => {
        state.isLoading = false;
        state.addresslist = action.payload.data;
      })
      .addCase(fetchallAddresses.rejected, (state) => {
        state.isLoading = false;
        state.addresslist = [];
      })
      .addCase(editAddress.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(editAddress.fulfilled, (state, action) => {
        state.isLoading = false;
        state.addresslist = action.payload.data;
      })
      .addCase(editAddress.rejected, (state) => {
        state.isLoading = false;
        state.addresslist = [];
      })
      .addCase(deleteAddress.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteAddress.fulfilled, (state, action) => {
        state.isLoading = false;
        state.addresslist = action.payload.data;
      })
      .addCase(deleteAddress.rejected, (state) => {
        state.isLoading = false;
        state.addresslist = [];
      });
  },
});


export default addressSlice.reducer;
