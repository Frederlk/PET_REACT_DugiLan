import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IOrder } from "../../../models";

export interface ordersState {
    orders: IOrder[];
}
const initialState: ordersState = {
    orders: [],
};

export const ordersSlice = createSlice({
    name: "@@orders",
    initialState,
    reducers: {
        setOrders: (state, action: PayloadAction<IOrder[]>) => {
            state.orders = action.payload;
        },
    },
});

export const ordersActions = ordersSlice.actions;
export const ordersReducer = ordersSlice.reducer;
