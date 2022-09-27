import { authActions } from "./auth.slice";
import { AppDispatch } from "./../../store";
import { IUser } from "./../../../models/index";

export const AuthActionCreators = {
    login: (userData: { login: string; password: string }, user: IUser) => async (dispatch: AppDispatch) => {
        const iff =
            userData &&
            user &&
            (userData.login === user.email || user.username) &&
            userData.password === user.password;
        try {
            dispatch(authActions.setError(""));
            dispatch(authActions.setIsLoading(true));
            setTimeout(async () => {
                if (iff) {
                    localStorage.setItem("auth", "true");
                    localStorage.setItem("username", user.username);
                    dispatch(authActions.setUser(user));
                    dispatch(authActions.setIsAuth(true));
                    window.scrollTo(0, 0);
                } else {
                    dispatch(authActions.setError("Wrong Username/Email or Password"));
                }
                dispatch(authActions.setIsLoading(false));
            }, 1000);
        } catch (e) {
            dispatch(authActions.setError("Something went wrong"));
        }
    },

    logout: () => async (dispatch: AppDispatch) => {
        localStorage.removeItem("auth");
        localStorage.removeItem("username");
        dispatch(authActions.setUser({} as IUser));
        dispatch(authActions.setIsAuth(false));
    },
};
