import { authReducer } from "./slices/auth/auth.slice";
import { productReducer } from "./slices/product/product.slice";
import { bodyLockReducer } from "./slices/bodyLock/bodyLock.slice";
import { menuReducer } from "./slices/menu/menu.slice";
import { combineReducers, configureStore } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
    bodyLock: bodyLockReducer,
    menu: menuReducer,
    product: productReducer,
    auth: authReducer,
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
