import { ICoupon } from "./../../../models/index";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICartProduct } from "../../../models";

export enum LSKeys {
    LS_FAV_KEY = "fav",
    LS_CART_KEY = "cart",
    LS_COUPON_KEY = "coupon",
}

export interface productState {
    cartItems: ICartProduct[];
    favourites: string[];
    coupon: ICoupon | null;
}

const initialState: productState = {
    cartItems: JSON.parse(localStorage.getItem(LSKeys.LS_CART_KEY) ?? "[]"),
    favourites: JSON.parse(localStorage.getItem(LSKeys.LS_FAV_KEY) ?? "[]"),
    coupon: null,
};

export const productSlice = createSlice({
    name: "@@product",
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<ICartProduct>) => {
            state.cartItems.push(action.payload);
            localStorage.setItem(LSKeys.LS_CART_KEY, JSON.stringify(state.cartItems));
        },
        removeFromCart: (state, action: PayloadAction<string>) => {
            state.cartItems = state.cartItems.filter((item) => item.id !== action.payload);
            localStorage.setItem(LSKeys.LS_CART_KEY, JSON.stringify(state.cartItems));
        },
        changeProduct: (state, action: PayloadAction<ICartProduct>) => {
            state.cartItems.splice(
                state.cartItems.findIndex((el) => el.id === action.payload.id),
                1,
                action.payload
            );
            localStorage.setItem(LSKeys.LS_CART_KEY, JSON.stringify(state.cartItems));
        },
        clearCart: (state) => {
            state.cartItems = [];
            localStorage.removeItem(LSKeys.LS_CART_KEY);
            localStorage.removeItem(LSKeys.LS_COUPON_KEY);
        },
        setCoupon: (state, action: PayloadAction<ICoupon | null>) => {
            state.coupon = action.payload;
            localStorage.setItem(LSKeys.LS_COUPON_KEY, JSON.stringify(state.coupon));
        },

        //========================================================================================================================================================
        addToFavourites: (state, action: PayloadAction<string>) => {
            state.favourites.push(action.payload);
            localStorage.setItem(LSKeys.LS_FAV_KEY, JSON.stringify(state.favourites));
        },
        removeFromFavourites: (state, action: PayloadAction<string>) => {
            state.favourites = state.favourites.filter((id) => id !== action.payload);
            localStorage.setItem(LSKeys.LS_FAV_KEY, JSON.stringify(state.favourites));
        },
    },
});

export const productActions = productSlice.actions;
export const productReducer = productSlice.reducer;
