import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const LS_FAV_KEY = "fav";
const LS_CART_KEY = "cart";

export interface productState {
    cartItems: string[];
    favourites: string[];
}

const initialState: productState = {
    cartItems: JSON.parse(localStorage.getItem(LS_CART_KEY) ?? "[]"),
    favourites: JSON.parse(localStorage.getItem(LS_FAV_KEY) ?? "[]"),
};

export const productSlice = createSlice({
    name: "@@product",
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<string>) => {
            state.cartItems.push(action.payload);
            localStorage.setItem(LS_CART_KEY, JSON.stringify(state.cartItems));
        },
        removeFromCart: (state, action: PayloadAction<string>) => {
            state.cartItems = state.cartItems.filter((id) => id !== action.payload);
            localStorage.setItem(LS_CART_KEY, JSON.stringify(state.cartItems));
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
