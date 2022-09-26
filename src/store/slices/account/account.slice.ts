import { IUser } from "../../../models/index";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export enum selectedNames {
    ADDRESS = "Address",
    DASHBOARD = "Dashboard",
    ORDERS = "Orders",
    DETAILS = "Account Details",
}

export interface AccountState {
    selected: string;
}
const initialState: AccountState = {
    selected: "Dashboard",
};

export const accountSlice = createSlice({
    name: "@@account",
    initialState,
    reducers: {
        setSelected: (state, action: PayloadAction<string>) => {
            state.selected = action.payload;
        },
    },
});

export const accountActions = accountSlice.actions;
export const accountReducer = accountSlice.reducer;
