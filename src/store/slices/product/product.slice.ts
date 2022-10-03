import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICartProduct } from "../../../models";

const LS_FAV_KEY = "fav";
const LS_CART_KEY = "cart";

export interface productState {
    cartItems: ICartProduct[];
    favourites: string[];
    coupon: number;
}

const initialState: productState = {
    cartItems: JSON.parse(localStorage.getItem(LS_CART_KEY) ?? "[]"),
    favourites: JSON.parse(localStorage.getItem(LS_FAV_KEY) ?? "[]"),
    coupon: 0,
};

export const productSlice = createSlice({
    name: "@@product",
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<ICartProduct>) => {
            state.cartItems.push(action.payload);
            localStorage.setItem(LS_CART_KEY, JSON.stringify(state.cartItems));
        },
        removeFromCart: (state, action: PayloadAction<string>) => {
            state.cartItems = state.cartItems.filter((item) => item.id !== action.payload);
            localStorage.setItem(LS_CART_KEY, JSON.stringify(state.cartItems));
        },
        changeProduct: (state, action: PayloadAction<ICartProduct>) => {
            state.cartItems.splice(
                state.cartItems.findIndex((el) => el.id === action.payload.id),
                1,
                action.payload
            );
            localStorage.setItem(LS_CART_KEY, JSON.stringify(state.cartItems));
        },
        setCoupon: (state, action: PayloadAction<number>) => {
            state.coupon = action.payload;
        },

        //========================================================================================================================================================
        addToFavourites: (state, action: PayloadAction<string>) => {
            state.favourites.push(action.payload);
            localStorage.setItem(LS_FAV_KEY, JSON.stringify(state.favourites));
        },
        removeFromFavourites: (state, action: PayloadAction<string>) => {
            state.favourites = state.favourites.filter((id) => id !== action.payload);
            localStorage.setItem(LS_FAV_KEY, JSON.stringify(state.favourites));
        },
    },
});

export const productActions = productSlice.actions;
export const productReducer = productSlice.reducer;
