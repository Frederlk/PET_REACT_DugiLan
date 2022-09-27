import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { accountReducer } from "./slices/account/account.slice";
import { authReducer } from "./slices/auth/auth.slice";
import { productReducer } from "./slices/product/product.slice";
import { bodyLockReducer } from "./slices/bodyLock/bodyLock.slice";
import { menuReducer } from "./slices/menu/menu.slice";
import { ordersReducer } from "./slices/orders/orders.slice";
import { addressReducer } from "./slices/address/address.slice";

const rootReducer = combineReducers({
    bodyLock: bodyLockReducer,
    menu: menuReducer,
    product: productReducer,
    auth: authReducer,
    account: accountReducer,
    orders: ordersReducer,
    address: addressReducer,
});

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(/* more middlewares */),
    });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
