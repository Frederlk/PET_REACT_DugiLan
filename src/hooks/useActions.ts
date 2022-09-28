import { useDispatch } from "react-redux";
import { bindActionCreators } from "@reduxjs/toolkit";

import { menuActions } from "../store/slices/menu/menu.slice";
import { bodyLockActions } from "../store/slices/bodyLock/bodyLock.slice";
import { productActions } from "../store/slices/product/product.slice";
import { userActions } from "../store/slices/user/user.slice";
import { UserActionCreators } from "../store/slices/user/action-creators";
import { accountActions } from "../store/slices/account/account.slice";

const actions = {
    ...menuActions,
    ...bodyLockActions,
    ...productActions,
    ...userActions,
    ...UserActionCreators,
    ...accountActions,
};

const useActions = () => {
    const dispatch = useDispatch();
    return bindActionCreators(actions, dispatch);
};

export default useActions;
