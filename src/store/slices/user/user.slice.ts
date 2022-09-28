import { IUser } from "../../../models/index";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface userState {
    isAuth: boolean;
    user: IUser;
    isLoading: boolean;
    error: string;
}
const initialState: userState = {
    isAuth: false,
    error: "",
    isLoading: false,
    user: {} as IUser,
};

export const userSlice = createSlice({
    name: "@@user",
    initialState,
    reducers: {
        setIsAuth: (state, action: PayloadAction<boolean>) => {
            state.isLoading = false;
            state.isAuth = action.payload;
        },
        setError: (state, action: PayloadAction<string>) => {
            state.isLoading = false;
            state.error = action.payload;
        },
        setIsLoading: (state, action: PayloadAction<boolean>) => {
            state.isLoading = action.payload;
        },
        setUser: (state, action: PayloadAction<IUser>) => {
            state.user = action.payload;
        },
    },
});

export const userActions = userSlice.actions;
export const userReducer = userSlice.reducer;
