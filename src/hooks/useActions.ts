import { useDispatch } from "react-redux";
import { bindActionCreators } from "@reduxjs/toolkit";

import { menuActions } from "../store/slices/menu/menu.slice";
import { bodyLockActions } from "../store/slices/bodyLock/bodyLock.slice";
import { productActions } from "../store/slices/product/product.slice";

const actions = {
    ...menuActions,
    ...bodyLockActions,
    ...productActions,
};

const useActions = () => {
    const dispatch = useDispatch();
    return bindActionCreators(actions, dispatch);
};

export default useActions;
