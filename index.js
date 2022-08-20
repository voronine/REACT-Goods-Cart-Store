import { configureStore } from '@reduxjs/toolkit';
import goodsReducer from './goodsSlice';
import cartReducer from './cartSlice';

export default configureStore({
    reducer: {
        goods: goodsReducer,
        cart: cartReducer
    },
});