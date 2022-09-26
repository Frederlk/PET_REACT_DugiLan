import { useDispatch } from "react-redux";
import { bindActionCreators } from "@reduxjs/toolkit";

import { menuActions } from "../store/slices/menu/menu.slice";
import { bodyLockActions } from "../store/slices/bodyLock/bodyLock.slice";
import { productActions } from "../store/slices/product/product.slice";
import { authActions } from "../store/slices/auth/auth.slice";
import { AuthActionCreators } from "../store/slices/auth/action-creators";

const actions = {
    ...menuActions,
    ...bodyLockActions,
    ...productActions,
    ...authActions,
    ...AuthActionCreators,
};

const useActions = () => {
    const dispatch = useDispatch();
    return bindActionCreators(actions, dispatch);
};

export default useActions;
