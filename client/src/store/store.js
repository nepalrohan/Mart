import {configureStore} from "@reduxjs/toolkit";
import authReducer from "./auth-slice";
import adminProductSlice from './admin/products-slice';
import shopProductSlice from './shop/product-slice'
import shopCartSlice from './shop/cart-slice';

const store = configureStore({

    reducer:{
        auth:authReducer,
        adminProducts:adminProductSlice,
        shopProducts:shopProductSlice,
        shopCart:shopCartSlice,
    },
});


export default store;


