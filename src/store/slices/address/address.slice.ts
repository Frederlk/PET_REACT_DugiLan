import { IUserAddress } from "./../../../models/index";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface addressState {
    address: IUserAddress;
}
const initialState: addressState = {
    address: {} as IUserAddress,
};

export const addressSlice = createSlice({
    name: "@@address",
    initialState,
    reducers: {
        setAddress: (state, action: PayloadAction<IUserAddress>) => {
            state.address = action.payload;
        },
    },
});

export const addressActions = addressSlice.actions;
export const addressReducer = addressSlice.reducer;
