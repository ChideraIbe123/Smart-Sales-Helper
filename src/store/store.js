import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './slices/cartSlice';
import productSlice from './slices/productSlice';


const store = configureStore({
    reducer: {
        cart: cartReducer,
        products: productSlice.reducer,
    }
});


export default store;