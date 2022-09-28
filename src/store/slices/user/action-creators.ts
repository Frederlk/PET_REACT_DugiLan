import { userActions } from "./user.slice";
import { AppDispatch } from "../../store";
import { IUser } from "../../../models/index";

export const UserActionCreators = {
    login: (userData: { login: string; password: string }, user: IUser) => async (dispatch: AppDispatch) => {
        const iff =
            userData &&
            user &&
            (userData.login === user.email || userData.login === user.username) &&
            userData.password === user.password;
        try {
            dispatch(userActions.setError(""));
            dispatch(userActions.setIsLoading(true));
            if (iff) {
                localStorage.setItem("auth", "true");
                localStorage.setItem("user", JSON.stringify(user));
                dispatch(userActions.setUser(user));
                dispatch(userActions.setIsAuth(true));
                window.scrollTo(0, 0);
            } else {
                dispatch(userActions.setError("Wrong Username/Email or Password"));
            }
            dispatch(userActions.setIsLoading(false));
        } catch (e) {
            dispatch(userActions.setError("Something went wrong"));
        }
    },

    logout: () => async (dispatch: AppDispatch) => {
        localStorage.removeItem("auth");
        localStorage.removeItem("user");
        dispatch(userActions.setUser({} as IUser));
        dispatch(userActions.setIsAuth(false));
    },
};
