import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { accountReducer } from "./slices/account/account.slice";
import { userReducer } from "./slices/user/user.slice";
import { productReducer } from "./slices/product/product.slice";
import { bodyLockReducer } from "./slices/bodyLock/bodyLock.slice";
import { menuReducer } from "./slices/menu/menu.slice";

import { couponAPI } from "./../services/couponAPI";
import { userAPI } from "../services/userAPI";

const rootReducer = combineReducers({
    bodyLock: bodyLockReducer,
    menu: menuReducer,
    product: productReducer,
    user: userReducer,
    account: accountReducer,
    [userAPI.reducerPath]: userAPI.reducer,
    [couponAPI.reducerPath]: couponAPI.reducer,
});

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(userAPI.middleware, couponAPI.middleware),
    });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
