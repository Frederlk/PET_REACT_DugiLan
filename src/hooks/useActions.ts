import { useDispatch } from "react-redux";
import { bindActionCreators } from "@reduxjs/toolkit";

import { addressActions } from "./../store/slices/address/address.slice";
import { AddressActionCreators } from "./../store/slices/address/action-creators";
import { menuActions } from "../store/slices/menu/menu.slice";
import { bodyLockActions } from "../store/slices/bodyLock/bodyLock.slice";
import { productActions } from "../store/slices/product/product.slice";
import { authActions } from "../store/slices/auth/auth.slice";
import { AuthActionCreators } from "../store/slices/auth/action-creators";
import { accountActions } from "../store/slices/account/account.slice";
import { ordersActions } from "../store/slices/orders/orders.slice";
import { OrdersActionCreators } from "../store/slices/orders/action-creators";

const actions = {
    ...menuActions,
    ...bodyLockActions,
    ...productActions,
    ...authActions,
    ...AuthActionCreators,
    ...accountActions,
    ...ordersActions,
    ...OrdersActionCreators,
    ...addressActions,
    ...AddressActionCreators,
};

const useActions = () => {
    const dispatch = useDispatch();
    return bindActionCreators(actions, dispatch);
};

export default useActions;
